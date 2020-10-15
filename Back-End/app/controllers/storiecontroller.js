const history = require('../models/history');

const storieController = {

    getAll: async (request, response) => {
        const historyList = await history.findAll();
        response.json(historyList);
    },

    getById: async (request, response) => {
        const oneHistory = await history.findById(request.params.id);
        response.json(oneHistory);
    },
};

module.exports = storieController;