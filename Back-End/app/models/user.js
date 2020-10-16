// On récupère 
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
        return data.rows;
    },

    findByUserName: async (userName) => {
        const sql = `SELECT * FROM nav.user WHERE "userName" = $1;`;
        const data = await db.query(sql, [userName]);
        return data.rows[0];
    },

    createUser: async (newUser) => {
        console.log('newUser: ', newUser);
        // on décomponse la requete SQL avec les informations que l'on veut insérer 
        const sql = `INSERT INTO nav.user ("userName", "email", "password") VALUES ($1, $2, $3) RETURNING "id", "userName";`;
        // on se connecte à la BD avec notre client , ici DB , et on stock dans data la requete complete pour notre return
        const data = await db.query(sql, [newUser.userName, newUser.email, newUser.password]);
        data.rows[0].message = 'Le compte est bien créer'
        return data.rows[0];
    },

};

module.exports = user;