const express = require('express');
const router = express.Router();
const Tags = require('../models/Tags');

router.get('/tags', async (req, res) => {
    try {
        const tags = await Tags.findAll();
        res.json(tags);
    } catch (error) {
        console.error('Erreur lors de la récupération des tags :', error);
        res.status(500).json({ error: 'Failed to fetch tags' });
    }
});

module.exports = router;
