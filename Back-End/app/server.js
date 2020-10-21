// Package pour express (server)
const express = require('express');

// Package pour ouvrir l'acces de l'API
const cors = require('cors');

// Package pour les variables d'environements
const dotenv = require('dotenv');
dotenv.config();

// On récupère le router 
const router = require('./router');

// On lance le server express
const app = express();

// Si la variable d'environement PORT n'est pas dispo le port sera 8000
const port = process.env.PORT || 8000;

// on rajoute la gestion des POST body
app.use(express.urlencoded({ extended: true }));

// et on rajoute la gestion des sessions
const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'Un Super Secret',
  cookie: {
    maxAge: 60 * 60 * 1000 // 1h
  },
}));

// middleWare qui crée la session user (default: {connected_user = false})
const userMiddleware = require('./middlewares/user');
app.use(userMiddleware);

// Si on m'envoie du JSON, je le mettrai en forme dans request.body, pour qu'il soit accessible
app.use(express.json());

// On ouvre l'accés a l'API pour le localhost, on ajoutera l'url ou on va deployer l'API
app.use(cors());

// On utilise le router
app.use(router);

// On ecoute le port 
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

// On exports app pour l'index
module.exports = app;