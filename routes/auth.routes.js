module.exports = app => {

    const users = require('../controllers/users.controller');

    var router = require("express").Router();

    // Creates a new user
    router.post("/signup", users.create);

    // Fetch user by data
    router.post("/signin", users.login);

    app.use('/auth', router);
}
