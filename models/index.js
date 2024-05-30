const dbConfig = require("../config/db.config");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios = require('./usuarios')(sequelize, Sequelize);
db.transacoes = require('./transacoes')(sequelize, Sequelize);
db.transacoes = require('./words')(sequelize, Sequelize);

module.exports = db;
