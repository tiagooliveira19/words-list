module.exports = app => {

    const transacoes = require('../controllers/transacoes.controller');

    var router = require("express").Router();

    // Creates a new transaction
    router.post("/add", transacoes.create);

    // Fetches all transactions
    router.get("/", transacoes.findAll);

    app.use('/api/transacoes', router);
}
