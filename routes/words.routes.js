module.exports = app => {

    const words = require('../controllers/words.controller');

    var router = require("express").Router();

    // Creates a new word
    router.post("/word", words.create);

    // Fetch word by search data
    router.get("/word", words.search);

    // Fetches all words
    router.get("/", words.findAll);

    app.use('/entries/en', router);
}
