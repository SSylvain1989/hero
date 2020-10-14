const express = require('express');

// Package pour les variables d'environements
const dotenv = require('dotenv');
dotenv.config();

const router = require('./router');

const app = express();

const port = process.env.PORT || 8000;

// si on m'envoie du JSON, je le mettrai en forme dans request.body, pour qu'il soit accessible
app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

module.exports = app;