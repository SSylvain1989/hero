const user = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const connexionController = {
    login: async (request, response) => {
        const messageTab = [];
        // request.body c'est ici qu'on récupère les infos du formulaire
        // on check si username rentré par l'user est égale à un User déjà dans la BDD
        const checkUser = await user.findByUserName(request.body.userName);

        if (checkUser === undefined) {
            const messageUserName = 'UserName non enregistré en base de donnée';
            messageTab.push({ messageUserName: messageUserName });
        };
        console.log('je vais comparer les mdp', request.body);
        console.log('checkUser', checkUser);

        // ici on compare le mdp reçu en front & celui déjà en BDD ( si true : c'est good)
        const compare = await bcrypt.compare(request.body.password, checkUser.password);

        if (compare === false) {
            const messagePassword = `Le mot de passe n'est pas valide`;
            messageTab.push({ messagePassword: messagePassword });
        };
        if (messageTab.length > 0) { // on check si notre tableau de message est supérieur à 0
            console.log(messageTab);
            response.json(messageTab);
        };
        console.log('request.session: ', request.session);
        console.log('checkUser: ', checkUser);
        request.session.user = {
            id: checkUser.id,
            userName: checkUser.userName,
            email: checkUser.email,
            detail_id: checkUser.detail_id
        };
        console.log('request.session apres update: ', request.session);
        console.log('response.locals: ', response.locals.connected_user)

        response.json('Connexion ok');
    },
    loginCheck: (request, response) => {
        response.send('Hello !');
    },
    signup: async (request, response) => { //
        const messageTab = [];
        console.log('req.body: ', request.body); // c'est ici qu'on récupère les info du formulaire
        const checkUser = await user.findByUserName(request.body.userName);
        if (checkUser !== undefined) { // - 1: On verifie si L'utilisateur existe en bdd
            const messageUserName = 'UserName deja enregistré en base de donnée';
            messageTab.push({ messageUserName: messageUserName });
        };
        if (!emailValidator.validate(request.body.email)) { // - 2: On verifie si le format d'email est valide
            const messageEmail = `Cet email n\'est pas valide.`;
            messageTab.push({ messageEmail: messageEmail });
        };
        if (request.body.password !== request.body.passwordConfirm) { // - 3: On verifie si le mdp et sa confirmation correspondent
            const messagePassword = "La confirmation du mot de passe ne correspond pas.";
            messageTab.push({ messagePassword: messagePassword });
        };
        if (messageTab.length > 0) { // on check si notre tableau de message est supérieur à 0
            console.log(messageTab)
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

        response.json(save); // 7 - on renvoi le RETURNING de la requete SQL , soit ici ( cf models user ) id & userName
    },
};

module.exports = connexionController;