const {Sequelize} = require('sequelize');

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
})

module.exports = connection;