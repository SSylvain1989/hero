// On récupère la connexion a la base de données
const db = require('../database');

const boardDetail = {
    findById: async (id) => { // on récupère les game_details de l'user connecter dans la session
        // on prépare la requete
        const sql = `SELECT * FROM nav.game_details WHERE id = $1;`;
        // on envoie la requete en bdd avec la requete preparer et l'id passé en parametre
        const data = await db.query(sql, [id]);
        // on renvoie les data de la requete
        return data.rows[0];
    },
    editBoardProfile: async (boardUser) => {
        // on prépare la requete
        const sql = `UPDATE nav.game_details SET "displayName" = $1, "avatar" = $2 WHERE id = $3 RETURNING "displayName", "avatar";`;
        // on envoie la requete en bdd avec la requete preparer et les valeurs passé en parametre
        const boardUserUpdate = await db.query(sql, [boardUser.displayName, boardUser.avatar, boardUser.id]);
        // on stock un message de confirmation dans les données recus
        boardUserUpdate.rows[0].message = 'Vos informations sont modifiées';
        // on renvoie les données
        return boardUserUpdate.rows[0];
    },
};

module.exports = boardDetail;