const express = require('express');
const router = express.Router();
const Articles = require('../models/Article');

router.get('/articles', async (req, res) => {
    try {
        const articles = await Articles.findAll();
        res.json(articles);
    } catch (error) {
        console.error('Erreur lors de la récupération des tags :', error);
        res.status(500).json({ error: 'Failed to fetch tags' });
    }
});

module.exports = router;
