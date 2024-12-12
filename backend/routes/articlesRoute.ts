import express, { Request, Response } from 'express';
import Article from '../models/Article';

const router = express.Router();

router.get('/articles', async (req: Request, res: Response): Promise<void> => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

export default router;
