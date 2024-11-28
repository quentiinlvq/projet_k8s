// config/database.js
const { Sequelize } = require('sequelize');
const config = require('./config');  // Importer la configuration globale

// Crée une instance Sequelize pour se connecter à la base de données
const sequelize = new Sequelize({
    dialect: config.db.dialect,   // Utilisation du dialecte de la base de données
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    logging: config.db.logging,  // Désactiver le logging des requêtes SQL
    pool: config.db.pool,        // Options de pool de connexions
});

module.exports = sequelize;
