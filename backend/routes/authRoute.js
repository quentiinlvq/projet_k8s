const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Assurez-vous que le modèle User est correctement configuré
const router = express.Router();
const jwt = require('jsonwebtoken');

// Route pour l'inscription
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password_hash: hashedPassword,
        });

        res.status(201).json({
            message: 'Utilisateur créé avec succès.',
            userId: newUser.user_id,
        });
    } catch (err) {
        console.error('Erreur lors de la création de l’utilisateur :', err);
        res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }

        console.log('Validation du mot de passe pour l’utilisateur:', user.username);

        // Création du token JWT
        console.log('Création du token JWT');
        const token = jwt.sign(
            { id: user.user_id, email: user.email },
            process.env.JWT_SECRET, // Utilise la clé depuis .env
            { expiresIn: '1h' }
        );

        return res.json({ message: 'Connexion réussie.', token });
    } catch (err) {
        console.error('Erreur lors de la connexion :', err);
        return res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
});

// Route pour la déconnexion
router.post('/logout', (req, res) => {
    // Si vous utilisez des sessions, détruisez-les ici
    // Exemple si vous utilisez `express-session` :
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de la déconnexion.' });
            }
            res.status(200).json({ message: 'Déconnexion réussie.' });
        });
    } else {
        res.status(200).json({ message: 'Déconnexion réussie.' });
    }
});

module.exports = router;
