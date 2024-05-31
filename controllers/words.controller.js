const { where } = require('sequelize');
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
                message: "An error occurred while creating the word!"
            });
        });
};

// Fetches word by search data
exports.search = (req, res) => {

    const { page, size } = req.query;
    const { limit } = getPagination(page, size);

    Words.findOne({ where: { word: req.body.word } })
        .then(data => {
            // const response = getPagingData(data, page, limit);
            const response = data.dataValues;
            res.send(response);
        })
        .catch(err => {
            res.status(204).send({
                message: "Error fetching word " + req.body.word + '. No register found!'
            });
        });
};

// Favorites word
exports.favorite = (req, res) => {
    
    const { page, size } = req.query;
    const { limit } = getPagination(page, size);

    Words.update({ favorite: 1 }, { where : { word: req.body.word } })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(204).send({
                message: "Error to favorite word " + req.body.word + '!'
            });
        });
}

// Unfavorites word
exports.unFavorite = (req, res) => {
    
    const { page, size } = req.query;
    const { limit } = getPagination(page, size);

    Words.update({ favorite: 0 }, { where : { word: req.body.word } })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(204).send({
                message: "Error to unfavorite word " + req.body.word + '!'
            });
        });
}

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
                message: "An error occurred while fetching words!"
            });
        });
};


// Deletes word
exports.delete = (req, res) => {
    
    const { page, size } = req.query;
    const { limit } = getPagination(page, size);

    Words.destroy({ where : { word: req.body.word } })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(204).send({
                message: "Error to delete word " + req.body.word + '!'
            });
        });
}