const sequelize = require('../config/database');
const User = require('../models/User');
const Article = require('../models/Article');
const ArticleTag = require('../models/ArticleTag');
const FollowedTopics = require('../models/FollowedTopics');
const Tags = require('../models/Tags');

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
