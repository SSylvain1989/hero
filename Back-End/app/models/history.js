// On récupère la connexion a la base de données
const db = require('../database');

const history = {
    /**
     * On récupère toute les histoires
     */
    findAll: async () => {
        const sql = `SELECT * FROM game.history;`;
        const data = await db.query(sql);
        return data.rows;
    },
    /**
     * On récupère une histoire par son id
     * @param - id de l'histoire
     */
    findById: async (id) => {
        const sql = `SELECT * FROM game.history WHERE id = $1;`;
        const data = await db.query(sql, [id]);
        return data.rows;
    },

};

module.exports = history;