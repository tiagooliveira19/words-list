const db = require('../models');
const Words = db.words;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: words } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, words, totalPages, currentPage };
};

// Creates and saves a new word
exports.create = (req, res) => {
    // Validates a request
    if (!req.body) {
        res.status(400).send({
            message: "Data cannot be empty!"
        });
    }

    // Creates a new word
    const word = new Words({
        word: req.body.word,
        phonetic: req.body.phonetic,
        meanings: req.body.meanings,
        favorite: req.body.favorite
    });

    // Saves word created at database
    Words.create(word.dataValues)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while creating the transaction!"
            });
        });
};

// Fetches all transactions
exports.findAll = (req, res) => {

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Words.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while fetching transactions!"
            });
        });
};
