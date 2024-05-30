module.exports = app => {

    const usuarios = require('../controllers/usuarios.controller');

    var router = require("express").Router();

    // Creates a new user
    router.post("/add", usuarios.create);

    // Fetch user by passed data
    router.post("/login", usuarios.login);

    // Fetches all users
    router.get("/", usuarios.findAll);

    app.use('/api/usuarios', router);
}
