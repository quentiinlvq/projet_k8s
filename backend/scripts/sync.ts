import sequelize from '../config/database';
import User from '../models/User';
import Article from '../models/Article';
import ArticleTag from '../models/ArticleTag';
import FollowedTopics from '../models/FollowedTopics';
import Tags from '../models/Tags';

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');

        await sequelize.sync({ force: false });
        console.log('Les modèles ont été synchronisés avec la base de données.');

        process.exit(0);
    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
        process.exit(1);
    }
})();
