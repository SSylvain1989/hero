const mainController = {
    sayHi: (request, response) => {
        console.log(request.session);
        response.send('Hello !');
    },
};

module.exports = mainController;