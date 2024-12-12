import express, { Request, Response } from 'express';
import Tags from '../models/Tags';

const router = express.Router();

router.get('/tags', async (req: Request, res: Response): Promise<void> => {
    try {
        const tags = await Tags.findAll();
        res.json(tags);
    } catch (error) {
        console.error('Erreur lors de la récupération des tags :', error);
        res.status(500).json({ error: 'Failed to fetch tags' });
    }
});

export default router;
