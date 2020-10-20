// On récupère la connexion a la bdd
const db = require('../database');

const user = {
    // On récupère tout les users
    findAll: async () => {
        const sql = `SELECT * FROM nav.user;`;
        const data = await db.query(sql);
        return data.rows;
    },
    // On récupère un user par son id
    findById: async (id) => {
        const sql = `SELECT * FROM nav.user WHERE id = $1;`;
        const data = await db.query(sql, [id]);
        return data.rows[0];
    },

    findByUserName: async (userName) => {
        const sql = `SELECT * FROM nav.user WHERE "userName" = $1;`;
        //const sql =`SELECT * FROM nav.user JOIN nav.game_details ON nav.user.detail_id = nav.game_details.id WHERE "userName" = $1;`
        const data = await db.query(sql, [userName]);
        return data.rows[0];
    },

    createGameDetails: async (newUser) => { // fonction qui va servir spécialement à la création du compte pour créer
        // un detail_id obligatoire à la gesiton de notre page profil
        // ici on décompose la requete SQL 
        const sql = `INSERT INTO nav.game_details ("avatar", "displayName") VALUES ($1, $2) RETURNING "id"`;
        // on se co à la BD avec le client db, on injecte dans la BD en dur "Warrior" pour l'avatar et displayName qui 
        // sera identique au userName 
        const data = await db.query(sql, ["Warrior", newUser.userName]);
        return data.rows[0];
    },

    createUser: async (newUser) => {
        const gameDetails = await user.createGameDetails(newUser);
        // on décomponse la requete SQL avec les informations que l'on veut insérer 
        const sql = `INSERT INTO nav.user ("userName", "email", "password", "detail_id") VALUES ($1, $2, $3, $4) RETURNING "id", "userName";`;
        // on se connecte à la BD avec notre client , ici DB , et on stock dans data la requete complete pour notre return
        const data = await db.query(sql, [newUser.userName, newUser.email, newUser.password, gameDetails.id]);
        data.rows[0].message = 'Le compte est bien créé';
        return data.rows[0];
    },

};

module.exports = user;