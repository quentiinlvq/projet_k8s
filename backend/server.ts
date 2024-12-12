import sequelize from './config/database';
import config from './config/config';
import tagsRouter from './routes/tagsRoute';
import articlesRouter from './routes/articlesRoute';
import express, {Application} from 'express';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(cors());

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie!');
    })
    .catch((err: Error) => {
        console.error('Impossible de se connecter à la base de données:', err);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log('Synchronisation des modèles terminée.');
    })
    .catch((err: Error) => {
        console.error('Erreur lors de la synchronisation des modèles:', err);
    });

app.use('/api/tags', tagsRouter);
app.use('/api/articles', articlesRouter);

const PORT: number = Number(config.app.port);
if (isNaN(PORT)) {
    console.error("Le port configuré est invalide. Utilisation du port par défaut 3000.");
    process.exit(1);
}

app.listen(PORT, () => {
    console.log(`L'application écoute sur le port ${PORT} en mode ${config.app.environment}`);
});
