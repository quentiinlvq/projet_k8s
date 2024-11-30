const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projet_k8s', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
