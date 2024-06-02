module.exports = app => {

    const words = require('../controllers/words.controller');

    var router = require("express").Router();

    // Fetches word by search data
    router.get("/:word", words.search);

    // Fetches word by search data (Like)
    router.get("/like/:word", words.searchLike);

    // Favorites and saves word
    router.post("/word/favorite", words.create);

    // Unfavorites and deletes word
    router.delete("/:word/unfavorite", words.delete);

    // Fetches all words
    router.get("/", words.findAll);

    app.use('/entries/en', router);
}
