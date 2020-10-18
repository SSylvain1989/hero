// On récupère le models history
const history = require('../models/history');

const storieController = {
    // Méthode pour récupérer toute les histoires
    getAll: async (request, response) => {
        const historyList = await history.findAll();
        if (request.session.user) {
            return response.json({historylist: historyList, session: request.session.user});
        }
        response.json({historylist: historyList});
    },
    // Méthode pour récupérer une histoire par son id
    getById: async (request, response) => {
        const oneHistory = await history.findById(request.params.id);
        if (request.session.user) {
            return response.json({history: oneHistory, session: request.session.user});
        }
        response.json({history: oneHistory});
    },
};

module.exports = storieController;