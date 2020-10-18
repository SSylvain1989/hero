const profile = require('../models/profile');
const user = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const profileController = {
    getOne: (request, response) => {
        response.json({session: request.session.user});
    },
    edit: async (request, response) => { 
        const messageTab = [];

        const data = { // je configure l'objet a envoyer un bdd
            id: request.session.user.id,
            userName: null,
            email: null,
            password: null
        };

        if (request.body.userName) { // Si il y'a un userName dans la requete
            const checkUser = await user.findByUserName(request.body.userName); // On verifie si le userName existe en bdd
    
            if (checkUser !== undefined) { // Si il existe on stock un message d'erreur dans messageTab
                const messageUserName = 'UserName deja enregistré en base de donnée';
                messageTab.push({messageUserName: messageUserName});
            } else { // Sinon on le stock dans data
                data.userName = request.body.userName;
            };
        } else { // Sinon on stock le userName de la session dans data
            data.userName = request.session.user.userName;
        };

        if (request.body.email) { // Si il y'a un email dans la requete
            // On verifie si le format d'email est valide
            if (!emailValidator.validate(request.body.email)) { // Si l'email n'est pas valide on stock un message d'erreur dans messageTab
                const messageEmail = `Cet email n\'est pas valide.`;
                messageTab.push({messageEmail: messageEmail});
            } else { // Sinon on stock dans data
                data.email = request.body.email;
            };
        } else { // Sinon on stock l'email de la session dans data
            data.email = request.session.user.email;
        };

        if (request.body.password && request.body.passwordConfirm) { // Si il y a un password et sa confirmation dans la requete
            // On verifie si le mdp et sa confirmation correspondent
            if (request.body.password !== request.body.passwordConfirm) { // Si il ne correspondent pas on stock un message d'erreur dans messageTab 
                const messagePassword = "La confirmation du mot de passe ne correspond pas.";
                messageTab.push({messagePassword: messagePassword});
            } else { // Sinon on crypt le password et on le stock dans data
                const salt = await bcrypt.genSalt(10);
                const encryptedPassword = await bcrypt.hash(request.body.password, salt);
                data.password = encryptedPassword;
            };
        } else if (request.body.password && request.body.passwordConfirm === undefined) {
            const messagePassword = "Veuillez remplir les deux champs password.";
            messageTab.push({messagePassword: messagePassword});
        } else if (request.body.password === undefined && request.body.passwordConfirm) {
            const messagePassword = "Veuillez remplir les deux champs password.";
            messageTab.push({messagePassword: messagePassword});
        } else { // Sinon on recupère le password en bdd pour le ranger dans data
            const userBdd = await user.findById(request.session.user.id);
            data.password = userBdd.password;
        };

        if (messageTab.length > 0) { // Si notre tableau de message est supérieur à 0 on le retourne
            return response.json({message: messageTab, session: request.session.user});
        };
        // Lancement de la requete pour update les infos
        const userEdit = await profile.editProfile(data);
        // Une fois les infos mis a jour en bdd il faut les stocker dans la session pour qu'elle soit a jour 
        request.session.user = {
            connected_user: true,
            id: userEdit.id,
            userName: userEdit.userName,
            email: userEdit.email,
            detail_id: userEdit.detail_id
        }
        // ON renvoie le message de la bdd et la session mis a jour
        response.json({message: userEdit.message, session: request.session.user});
    },
    delete: (request, response) => {
        response.json('Hello !');
    },
};

module.exports = profileController;