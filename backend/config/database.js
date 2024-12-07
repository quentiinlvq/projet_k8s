const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projet_k8s', 'root', 'root', {
    host: 'mysql',
    dialect: 'mysql',
});

module.exports = sequelize;
