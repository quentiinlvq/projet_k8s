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
    origin: function (origin, callback) {
        const allowedOrigins = [
            /^http:\/\/127\.0\.0\.1:\d+$/,
            /^http:\/\/localhost:\d+$/,
        ];

        if (allowedOrigins.some(pattern => pattern.test(origin))) {
            callback(null, true);
        } else {
            callback(new Error('Non autorisé par CORS'), false);
        }
    }
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

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
