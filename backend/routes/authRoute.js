const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Assurez-vous que le modèle User est correctement configuré
const router = express.Router();

// Route pour l'inscription
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validation des données
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser = await User.create({
            username,
            email,
            password_hash: hashedPassword,
        });

        // Réponse en cas de succès
        res.status(201).json({ message: 'Utilisateur créé avec succès.', userId: newUser.user_id });
    } catch (err) {
        console.error('Erreur lors de la création de l’utilisateur :', err);
        res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
});

module.exports = router;
