// On récupère le models history
const history = require('../models/history');

const storieController = {
    // Méthode pour récupérer toute les histoires
    getAll: async (request, response) => {
        const historyList = await history.findAll();
        response.json(historyList);
    },
    // Méthode pour récupérer une histoire par son id
    getById: async (request, response) => {
        const oneHistory = await history.findById(request.params.id);
        response.json(oneHistory);
    },
};

module.exports = storieController;