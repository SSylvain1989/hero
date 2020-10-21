const { request } = require("express");

const checkConnexion = (request, response, next) => {
    if(request.session.user.connected_user === false){
        const messageCheckConnection = 'Vous devez etre connecter pour accéder à cette page';
        return response.status(404).json({message: messageCheckConnection, session: request.session.user});
    }
  
    if(request.session.user.connected_user === true) {
        next();
    }
  };
  
module.exports = checkConnexion;