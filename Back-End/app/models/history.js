const db = require('../database');

const history = {

    findAll: async () => {
        const sql = `SELECT * FROM game.history;`;
        const data = await db.query(sql);
        console.log(data.rows);
        return data.rows;
    },

    findById: async (id) => {
        const sql = `SELECT * FROM game.history WHERE id = $1;`;
        const data = await db.query(sql, [id]);
        console.log(data.rows);
        return data.rows;
    },

};

module.exports = history;