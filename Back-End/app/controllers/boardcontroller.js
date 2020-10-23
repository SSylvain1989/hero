// On récupère le models gameDetails
const gameDetails = require('../models/game_details');

const boardController = {
    editStat: async (request, response) => { // met a jour les stat de jeux d'un utilisateur
        try {
            // tableau d'erreur
            const messageTab = [];
            // on configure l'objet data a envoyer
            const data = {
                user_id: request.session.user.id,
                history_id: request.params.id,
                character_id: null,
                detail_id: request.session.user.detail_id,
                gameWin: null,
                gameOver: null,
                gamePlay: 1
            };
            // Si il manque le champs character_id on stock un message d'erreur
            if (request.body.character_id === undefined) {
                const message = `Le personnage n'est pas renseigné, les stats ne peuvent pas etre mis a jour`
                response.status(404).json({message: message, session: request.session.user});
            } else { // Sinon on stock le character envoyer dans le body dans data
                data.character_id = request.body.character_id;
            };
            // Si la partie est gagné
            if (request.body.gameWin === 'true' || request.body.gameWin === true) {
                // on change les valeur dans data en y ajoutant les valeur présente dans la session
                data.gameWin = 1 + request.session.user.gameWin
                data.gameOver = 0 + request.session.user.gameOver
            } else { // Sinon elle est perdu
                // on change les valeur dans data
                data.gameWin = 0 + request.session.user.gameWin
                data.gameOver = 1 + request.session.user.gameOver
            }
            // On met a jour le nombre de partie jouer
            data.gamePlay = data.gamePlay + request.session.user.gamePlay;
            // On met a jour les stat en bdd
            const statEdit = await gameDetails.editBoardDetailGame(data);
            // On sauvegarde la partie en bdd
            const createParty = await gameDetails.createParty(data);
            // On met a jour la session avec les nouvelles info 
            request.session.user.gameWin = statEdit.gameWin;
            request.session.user.gameOver = statEdit.gameOver;
            request.session.user.gamePlay = statEdit.gamePlay;
            // on renvoie le resultat de la session update et un message de confirmation
            response.status(200).json({message: createParty, session: request.session.user});
        } catch (error) {
            console.trace(error);
            return response.status(500).json(error.tostring());
        };
    },
    getOneBoard: async (request, response) => { // renvoi userSession & userBoard
        try {
            // on récupère le detail_id de la session
            const idUser = request.session.user.detail_id;
            // on appel la methode findbyid avec l'id récupérer au dessus
            const oneUserBoard = await gameDetails.findById(idUser);
            // on renvoie le resultat obtenue de la bdd
            response.status(200).json({board: oneUserBoard, session: request.session.user});
        } catch (error) {
            console.trace(error);
            return response.status(500).json(error.tostring());
        };
    },
    edit: async (request, response) => { // modifier avatar / pseudoAffichage
        try {
            // on récupère le detail_id de la session
            const idUser = request.session.user.detail_id;
            // on appel la methode findbyid avec l'id récupérer au dessus
            const oneUserBoard = await gameDetails.findById(idUser);
            // on configure l'objet data a envoyer
            const data = {
                id: idUser,
                avatar: null, //request.body.avatar
                displayName: null //request.body.displayName
            };
            // Si il manque le champs avatar, on stock se qu'il y a en bdd dans data
            if (!request.body.avatar || !request.body.displayName) {
                data.avatar = oneUserBoard.avatar
                data.displayName = oneUserBoard.displayName
            };
            // si le champ avatar est remplis, on le stock dans data
            if (request.body.avatar) {
                data.avatar = request.body.avatar
            };
            // si le champ displayName est remplis, on le stock dans data
            if (request.body.displayName) {
                data.displayName = request.body.displayName
            };

            // on envoie les data pour la requete en bdd
            const editBoardUser = await gameDetails.editBoardProfile(data); 
            //boardUser.board nous permet de recup juste l'objet board(sans session)
            response.status(200).json({board: editBoardUser, session: request.session.user});
        } catch (error) {
            console.trace(error);
            return response.status(500).json(error.tostring());
        };
    },
};

module.exports = boardController;