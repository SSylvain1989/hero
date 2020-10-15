const history = require('../models/history');

const storieController = {

    getAll: async (request, response) => {
        const historyList = await history.findAll();
        response.json(historyList);
    },

    getByName: (request, response) => {
        response.send('Hello !');
    },
};

module.exports = storieController;