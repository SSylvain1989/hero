const user = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const connexionController = {
    login: (request, response) => {
        console.log('req.body: ',request.body); // c'est ici qu'on récupère les info du formulaire
    },
    loginCheck: (request, response) => {
        response.send('Hello !');
    },
    signup: async (request, response) => { //
        const messageTab = [];
        console.log('req.body: ',request.body); // c'est ici qu'on récupère les info du formulaire
        const checkUser = await user.findByUserName(request.body.userName); 
        if (checkUser !== undefined) { // - 1: On verifie si L'utilisateur existe en bdd
            const messageUserName = 'UserName deja enregistré en base de donnée';
            messageTab.push(messageUserName);
        };
        if (!emailValidator.validate(request.body.email)) { // - 2: On verifie si le format d'email est valide
            const messageEmail = "Cet email n\'est pas valide.";
            messageTab.push(messageEmail);
        };
        if (request.body.password !== request.body.passwordConfirm) { // - 3: On verifie si le mdp et sa confirmation correspondent
            const messagePassword = "La confirmation du mot de passe ne correspond pas.";
            messageTab.push(messagePassword);
        };
        if (messageTab.length > 0) {
            response.json(messageTab);
        };
        const salt = await bcrypt.genSalt(10); // 4 - On crypt le password
        const encryptedPassword = await bcrypt.hash(request.body.password, salt);
          
        const newUser = { // 5 - on stock dans notre const newUser les informations reçus du front 
            userName: request.body.userName,
            email: request.body.email,
            password: encryptedPassword,
        };

        const save = await user.createUser(newUser); // 6 - on passe les informations en paramêtre de la fonction createUser
        
        response.json(save); // 7 - on renvoi au front le 
    },
};

module.exports = connexionController;