module.exports = app => {

    const words = require('../controllers/words.controller');

    var router = require("express").Router();

    // Creates a new word
    router.post("/word", words.create);

    // Fetches word by search data
    router.get("/word", words.search);

    // Favorites word
    router.post("/word/favorite", words.favorite);

    // Unfavorites word
    router.post("/word/unfavorite", words.unFavorite);

    // Deletes word
    router.delete("/word", words.delete);

    // Fetches all words
    router.get("/", words.findAll);

    app.use('/entries/en', router);
}
