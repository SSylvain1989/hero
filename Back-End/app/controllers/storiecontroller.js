// On récupère le models history
const history = require('../models/history');

const storieController = {
    // Méthode pour récupérer toute les histoires
    getAll: async (request, response) => {
        // on attend le retour de la methode qui recupère toute les histoires
        const historyList = await history.findAll();
        // si un utilisateur est connecter, on renvoie les histoires et la session 
        if (request.session.user) {
            return response.json({historylist: historyList, session: request.session.user});
        }
        // Sinon on renvoie que les histoire
        response.json({historylist: historyList});
    },
    // Méthode pour récupérer une histoire par son id
    getById: async (request, response) => {
        // on attend le retour de la methode qui recupère une histoire par son id
        const oneHistory = await history.findById(request.params.id);
        // si un utilisateur est connecter, on renvoie l'histoire et la session 
        if (request.session.user) {
            return response.json({history: oneHistory, session: request.session.user});
        }
        // Sinon on renvoie que l'histoire
        response.json({history: oneHistory});
    },
};

module.exports = storieController;