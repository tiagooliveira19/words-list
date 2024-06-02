const db = require('../models');
const Users = db.users;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: users } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, users, totalPages, currentPage };
};

const TokenGenerator = require( 'token-generator' )({
    salt: 'your secret ingredient for this magic application',
    timestampMap: 'abcdefghij', // 10 chars array for obfuscation proposes
});

// Creates and saves a new user
exports.create = (req, res) => {
    // Validates a request
    if (!req.body) {
        res.status(400).send({
            message: "Data cannot be empty!"
        });
    }

    // Creates a new user
    const user = new Users({
        name: req.body.name,
        password: new Buffer(req.body.password).toString('base64'), // It does password cryptography
        email: req.body.email,
        token: TokenGenerator.generate()
        /* token: req.body.token */
    });

    // Saves user created at database
    Users.create(user.dataValues)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while creating the user!"
            });
        });
};

// Fetch user by login data
exports.login = (req, res) => {

    const { page, size } = req.query;
    const { limit } = getPagination(page, size);

    Users.findOne({ where: { name: req.body.name, password: new Buffer(req.body.password).toString('base64') } })
        .then(data => {
            // const response = getPagingData(data, page, limit);
            const response = data.dataValues;
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error fetching user with login " + req.body.name
            });
        });
};

// Fetches all users
exports.findAll = (req, res) => {

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Users.findAndCountAll({ order: [['id', 'ASC']], limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while searching for users!"
            });
        });
};
