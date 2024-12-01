const express = require('express');
const session = require('express-session');
const app = express();
const User = require('../models/User');

app.use(
    session({
        secret: 'SECRET',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, // Mettre à true si HTTPS est utilisé
    })
);

app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    req.session.userId = user._id;
    res.json({ message: 'Connexion réussie.' });
});

app.get('/protected', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Non autorisé.' });
    }
    res.json({ message: 'Bienvenue dans la zone protégée.' });
});

app.post('/auth/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la déconnexion.' });
        }
        res.clearCookie('connect.sid'); // Effacer le cookie de session
        res.json({ message: 'Déconnexion réussie.' });
    });
});
