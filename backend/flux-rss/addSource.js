const { DataSource } = require('../models/DataSource');

(async () => {
    try {
        const sources = [
            {
                source_type: 'rss',
                source_name: 'The Hacker News',
                url: 'https://feeds.feedburner.com/TheHackersNews?format=xml',
                description: 'Most trusted independent cybersecurity news source.',
            },
        ];

        for (const source of sources) {
            const existingSource = await DataSource.findOne({ where: { url: source.url } });
            if (!existingSource) {
                await DataSource.create(source);
                console.log(`Source ajoutée : ${source.source_name}`);
            } else {
                console.log(`La source existe déjà : ${source.source_name}`);
            }
        }
    } catch (error) {
        console.error('Erreur lors de l’ajout des sources :', error);
    }
})();
