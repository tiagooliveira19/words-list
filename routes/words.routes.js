module.exports = app => {

    const words = require('../controllers/words.controller');

    var router = require("express").Router();

    // Creates a new word
    router.post("/add", words.create);

    // Fetches all words
    router.get("/", words.findAll);

    app.use('/api/words', router);
}
