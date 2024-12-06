const RSSParser = require('rss-parser');
const parser = new RSSParser();

const hackerNewsHandler = {
    sourceName: 'The Hacker News',
    sourceUrl: 'https://feeds.feedburner.com/TheHackersNews?format=xml',
    description: 'Most trusted independent cybersecurity news source.',

    // Fonction pour traiter les articles spécifiques à ce flux
    async processItems(items) {
        return items.map(item => ({
            title: item.title,
            content: item.contentSnippet || item.description,
            publish_date: new Date(item.pubDate),
            url: item.link,
        }));
    },

    // Récupérer et parser le flux RSS
    async fetchFeed() {
        try {
            const feed = await parser.parseURL(this.sourceUrl);
            console.log(`Flux RSS chargé : ${this.sourceName}`);
            return await this.processItems(feed.items);
        } catch (error) {
            console.error(`Erreur lors du chargement de ${this.sourceName}:`, error);
            return [];
        }
    },
};

module.exports = hackerNewsHandler;
