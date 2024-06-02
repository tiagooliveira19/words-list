module.exports = app => {

    const historics = require('../controllers/historic.controller');

    var router = require("express").Router();

    // Fetches all registers
    router.get("/all", historics.findAll);

    // Creates a new register
    router.post("/word", historics.create);

    // Fetches register by search data
    router.get("/:word", historics.search);
    
    // Fetches register by search data (Like)
    router.get("/like/:word", historics.searchLike);

    app.use('/entries/en/historic', router);
}
