module.exports = app => {

    const historics = require('../controllers/historic.controller');

    var router = require("express").Router();

    // Creates a new register
    router.post("/historic", historics.create);

    // Fetches register by search data
    router.get("/historic/:word", historics.search);

    // Fetches all words
    router.get("/", historics.findAll);

    app.use('/entries/en', router);
}
