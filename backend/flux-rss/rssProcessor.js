const hackerNewsHandler = require('./sources/hackerNews');
const { Article } = require('../models/Article');
const { DataSource } = require('../models/DataSource');
const sequelize = require('../config/database');

class RSSProcessor {
    async process() {
        try {
            // Étape 1 : Charger toutes les sources RSS
            const sources = await DataSource.findAll({ where: { source_type: 'rss' } });

            for (const source of sources) {
                let articles = [];
                console.log(`Traitement de la source : ${source.source_name}`);

                articles = await hackerNewsHandler.fetchFeed();

                // Étape 2 : Sauvegarder les articles dans la base
                for (const article of articles) {
                    const existingArticle = await Article.findOne({ where: { url: article.url } });
                    if (!existingArticle) {
                        await Article.create({
                            source_id: source.source_id,
                            title: article.title,
                            content: article.content,
                            publish_date: article.publish_date,
                            url: article.url,
                        });
                        console.log(`Article ajouté : ${article.title}`);
                    } else {
                        console.log(`Article déjà existant : ${article.title}`);
                    }
                }
            }
        } catch (error) {
            console.error('Erreur lors du traitement des flux RSS :', error);
        } finally {
            await sequelize.close();
        }
    }
}

module.exports = RSSProcessor;
