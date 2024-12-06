const RSSProcessor = require('./rssProcessor');
const sequelize = require('../config/database');

(async () => {
    console.log('Démarrage du traitement des flux RSS...');

    try {
        const processor = new RSSProcessor();
        await processor.process();
        console.log('Tous les flux RSS ont été traités avec succès.');
    } catch (error) {
        console.error('Erreur lors du traitement des flux RSS :', error);
    } finally {
        // Fermez la connexion à la base de données proprement.
        await sequelize.close();
        console.log('Connexion à la base de données fermée.');
    }
})();
