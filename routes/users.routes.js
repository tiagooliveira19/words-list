module.exports = app => {

    const users = require('../controllers/users.controller');

    var router = require("express").Router();

    // Creates a new user
    router.post("/add", users.create);

    // Fetch user by passed data
    router.post("/login", users.login);

    // Fetches all users
    router.get("/", users.findAll);

    app.use('/api/users', router);
}
