module.exports = app => {

    const historics = require('../controllers/historic.controller');

    var router = require("express").Router();

    // Fetches all registers
    router.get("/all/word/:user", historics.findAll);

    // Creates a new register
    router.post("/word", historics.create);

    // Fetches register by search data
    router.get("/:word/:user", historics.search);
    
    // Fetches register by search data (Like)
    router.get("/like/:word/:user", historics.searchLike);

    app.use('/entries/en/historic', router);
}
