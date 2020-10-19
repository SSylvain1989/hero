const gameController = {
    getHistory: (request, response) => {
        console.log(request.params.id)
        response.json('Hello !');
    },
    getByName: (request, response) => {
        response.json('Hello !');
    },
};

module.exports = gameController;