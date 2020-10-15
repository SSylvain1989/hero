const db = require('../database');

const history = {

    findAll: async () => {
        const sql = `SELECT * FROM game.history;`;
        const data = await db.query(sql);
        console.log(data.rows);
        return data.rows;
    },

};

module.exports = history;