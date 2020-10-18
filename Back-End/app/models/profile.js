// On récupère la connexion a la bdd
const db = require('../database');

const profile = {

    editProfile: async (data) => {
        // on décomponse la requete SQL avec les informations que l'on veut insérer 
        const sql = `UPDATE nav.user SET "userName" = $1, "email" = $2, "password" = $3, "updated_at" = now() WHERE id = $4 RETURNING "id", "userName", "email", "detail_id";`;
        // on se connecte à la BD avec notre client , ici DB , et on stock dans data la requete complete pour notre return
        const dataUpdate = await db.query(sql, [data.userName, data.email, data.password, data.id]);
        dataUpdate.rows[0].message = 'Le compte est bien modifier';
        return dataUpdate.rows[0];
    },

};

module.exports = profile;