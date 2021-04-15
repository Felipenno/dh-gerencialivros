const dbconfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    pool:{
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.livros = require ('./livros.model')(sequelize, Sequelize);
db.locatario = require ('./locatario.model')(sequelize, Sequelize);

module.exports = db;