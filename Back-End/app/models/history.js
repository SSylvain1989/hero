// On récupère la connexion a la base de données
const db = require('../database');

const history = {
    // On récupère toute les histoires
    findAll: async () => {
        const sql = `SELECT * FROM game.history;`;
        const data = await db.query(sql);
        console.log(data.rows);
        return data.rows;
    },
    // On récupère une histoire par son id
    findById: async (id) => {
        const sql = `SELECT * FROM game.history WHERE id = $1;`;
        const data = await db.query(sql, [id]);
        console.log(data.rows);
        return data.rows;
    },

};

module.exports = history;