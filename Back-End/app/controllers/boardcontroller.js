// On récupère le models history
const gameDetails = require('../models/game_details');

const boardController = {
    getOneBoard: async (request, response) => { // renvoi userSession & userBoard
        // on récupère le detail_id de la session
        const idUser = request.session.user.detail_id;
        // on appel la methode findbyid avec l'id récupérer au dessus
        const oneUserBoard = await gameDetails.findById(idUser);
        // on renvoie le resultat obtenue de la bdd
        response.json({board: oneUserBoard, session: request.session.user});
    },
    edit: async (request, response) => { // modifier avatar / pseudoAffichage
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
        response.json({board: editBoardUser, session: request.session.user});
    },
};

module.exports = boardController;