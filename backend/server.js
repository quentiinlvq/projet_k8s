require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const config = require('./config/config');

const app = express();
app.use(express.json());

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie!');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données:', err);
    });

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`L'application écoute sur le port ${PORT} en mode ${config.app.environment}`);
});
