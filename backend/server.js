require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const config = require('./config/config');
const tagsRouter = require('./routes/tagsRoute')
const articlesRouter = require('./routes/articlesRoute')

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:8080',
}));

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie!');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données:', err);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log('Synchronisation des modèles terminée.');
    })
    .catch(err => {
        console.error('Erreur lors de la synchronisation des modèles:', err);
    });

app.use('/api', tagsRouter);
app.use('/api', articlesRouter);

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`L'application écoute sur le port ${PORT} en mode ${config.app.environment}`);
});
