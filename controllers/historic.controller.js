const { where } = require('sequelize');
const db = require('../models');
const Historics = db.historics;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: historics } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, historics, totalPages, currentPage };
};

// Creates and saves a register
exports.create = (req, res) => {
    // Validates a request
    if (!req.body) {
        res.status(400).send({
            message: "Data cannot be empty!"
        });
    }

    // Creates a new word
    const historic = new Historics({
        word: req.body.word
    });

    // Saves word created at database
    Historics.create(historic.dataValues)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while creating the register!"
            });
        });
};

// Fetches a register by search data
exports.search = (req, res) => {

    const { page, size } = req.query;
    const { limit } = getPagination(page, size);

    Historics.findOne({ where: { word: req.params.word } })
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

// Fetches all registers
exports.findAll = (req, res) => {

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Historics.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while fetching registers!"
            });
        });
};
