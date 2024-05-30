const db = require('../models');
const Usuarios = db.usuarios;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: usuarios } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, usuarios, totalPages, currentPage };
};

// Creates and saves a new user
exports.create = (req, res) => {
    // Validates a request
    if (!req.body) {
        res.status(400).send({
            message: "Data cannot be empty!"
        });
    }

    // Creates a new user
    const usuario = new Usuarios({
        nome: req.body.nome,
        senha: new Buffer( req.body.senha).toString('base64'), // It does password cryptography
        telefone: req.body.telefone,
        endereco: req.body.endereco
    });

    // Saves user created at database
    Usuarios.create(usuario.dataValues)
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

    Usuarios.findOne({ where: { nome: req.body.nome, senha: new Buffer(req.body.senha).toString('base64') } })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error fetching user with login " + req.body.nome
            });
        });
};

// Fetches all users
exports.findAll = (req, res) => {

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Usuarios.findAndCountAll({ order: [['id', 'ASC']], limit, offset })
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
