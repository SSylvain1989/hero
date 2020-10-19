const mainController = {
    sayHi: (request, response) => {
        response.send('Hello !');
    },
};

module.exports = mainController;