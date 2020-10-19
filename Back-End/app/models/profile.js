// On récupère la connexion a la bdd
const db = require('../database');

const profile = {

    editProfile: async (data) => {
        // on décomponse la requete SQL avec les informations que l'on veut insérer 
        const sql = `UPDATE nav.user SET "userName" = $1, "email" = $2, "password" = $3, "updated_at" = now() WHERE id = $4 RETURNING "id", "userName", "email", "detail_id";`;
        // on se connecte à la BD avec notre client , ici DB , et on stock dans data la requete complete pour notre return
        const dataUpdate = await db.query(sql, [data.userName, data.email, data.password, data.id]);
        dataUpdate.rows[0].message = 'Le compte est bien modifier';
        // On renvoie les données mis a jours 
        return dataUpdate.rows[0];
    },

    deleteProfile: async (user) => {
        // requete SQL pour supprimer l'utilisateur
        const sql = `DELETE FROM nav.user WHERE id = $1;`;
        // requete SQL pour supprimer les details de l'utilisateur
        const sql2 = `DELETE FROM nav.game_details WHERE id = $1;`;
        // On lance la premiere requette pour supprimer un utilisateur
        await db.query(sql, [user.id]);
        // On lance la deuxieme requette pour supprimer les details d'un utilisateur
        await db.query(sql2, [user.details_id]);

        const message = 'Le compte est bien supprimer';
        // On retourne le message de confirmation de suppression de compte
        return message;
    },

};

module.exports = profile;