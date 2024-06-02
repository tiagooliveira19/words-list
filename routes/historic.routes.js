module.exports = app => {

    const historics = require('../controllers/historic.controller');

    var router = require("express").Router();

    // Fetches all registers
    router.get("/all", historics.findAll);

    // Creates a new register
    router.post("/word", historics.create);

    // Fetches register by search data
    router.get("/:word", historics.search);

    app.use('/entries/en/historic', router);
}
