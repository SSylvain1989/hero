const user = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const connexionController = {
    login: async (request, response) => {
        const messageTab = [];

        // on check si username rentré par l'user est égale à un User déjà dans la BDD
        const checkUser = await user.findByUserName(request.body.userName);
        
        if (request.body.userName && request.body.password) { // Si les 2 elements du form son present on effectue la suite
            if (checkUser !== undefined) { // Si l'utilisateur est trouver en bdd 
                // On compare le mdp reçu en front & celui déjà en BDD ( si true : c'est good)
                const compare = await bcrypt.compare(request.body.password, checkUser.password);
                // Si la comparaison n'est pas bonne on stock un message d'erreur 
                if (compare === false) {
                    const messagePassword = `Le mot de passe n'est pas valide`;
                    messageTab.push({messagePassword: messagePassword});
                };
            } else { // Sinon on stock un message d'erreur
                const messageUserName = 'UserName non enregistré en base de donnée';
                messageTab.push({messageUserName: messageUserName});
            };
        } else { // Sinon on stock un message d'erreur
            const messageUserName = 'Veuillez remplir tous les champs';
            messageTab.push({messageUserName: messageUserName});
        };

        if (messageTab.length > 0) { // Si notre tableau de message est supérieur à 0 on le renvoie
            return response.json(messageTab);
        };
        
        request.session.user = {
            connected_user: true,
            id: checkUser.id,
            userName: checkUser.userName,
            email: checkUser.email,
            detail_id: checkUser.detail_id
        };

        const messageConnexion = 'L\'utilisateur est bien connecter';

        response.json({message: messageConnexion, session: request.session.user});
    },
    loginCheck: (request, response) => {
        const messageTab = [];

        if (request.session.user.connected_user === false) {
            const messageCheckConnexion = 'Aucun utilisateur n\'est connecter';
            messageTab.push({messageCheckConnexion: messageCheckConnexion});
            return response.json({message: messageTab, session: request.session.user});
        };

        if (request.session.user.connected_user === true){
            const messageCheckConnexion = 'L\'utilisateur est bien connecter';
            messageTab.push({messageCheckConnexion: messageCheckConnexion});
            return response.json({message: messageTab, session: request.session.user});
        };
    },
    signup: async (request, response) => { // IL FAUT ENCORE RAJOUTER DES CONDITIONS AU CAS OU LES DONNEES SONT PARTIEL !!!!!
        const messageTab = [];

        const checkUser = await user.findByUserName(request.body.userName); 

        if (checkUser !== undefined) { // - 1: On verifie si L'utilisateur existe en bdd
            const messageUserName = 'UserName deja enregistré en base de donnée';
            messageTab.push({messageUserName: messageUserName});
        };

        if (!emailValidator.validate(request.body.email)) { // - 2: On verifie si le format d'email est valide
            const messageEmail = `Cet email n\'est pas valide.`;
            messageTab.push({messageEmail: messageEmail});
        };

        if (request.body.password !== request.body.passwordConfirm) { // - 3: On verifie si le mdp et sa confirmation correspondent
            const messagePassword = "La confirmation du mot de passe ne correspond pas.";
            messageTab.push({messagePassword: messagePassword});
        };

        if (messageTab.length > 0) { // on check si notre tableau de message est supérieur à 0
            return response.json({message: messageTab, session: request.session.user});
        };

        const salt = await bcrypt.genSalt(10); // 4 - On crypt le password
        const encryptedPassword = await bcrypt.hash(request.body.password, salt);
          
        const newUser = { // 5 - on stock dans notre const newUser les informations reçus du front 
            userName: request.body.userName,
            email: request.body.email,
            password: encryptedPassword,
        };

        const save = await user.createUser(newUser); // 6 - on passe les informations en paramêtre de la fonction createUser
        
        response.json({userSave: save, session: request.session.user}); // 7 - on renvoi le RETURNING de la requete SQL , soit ici ( cf models user ) id & userName
    },
    logout: (request, response) => {
        const messageTab = [];

        if (request.session.user.connected_user === false) {
            const messageLogout = 'Aucun utilisateur n\'est connecter';
            messageTab.push({messageLogout: messageLogout});
            return response.json({message: messageTab, session: request.session.user});
        };

        if (request.session.user.connected_user === true){
            request.session.user = {connected_user: false};
            const messageLogout = 'Deconnexion de l\'utilisateur ok';
            messageTab.push({messageLogout: messageLogout});
            return response.json({message: messageTab, session: request.session.user});
        };
    },
};

module.exports = connexionController;