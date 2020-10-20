// On récupère la connexion a la base de données
const db = require('../database');

const game = {
    findHistoryById: async (id) => {
        // on prépare la requete
        const sql = `SELECT history.id AS history_id,
                            history.name AS history_name,
                            history.description AS history_description,
                            history.difficulty AS history_difficulty,
                            history_has_scene.scene_id,
                            history_has_scene.previous_scene_id,
                            history_has_scene.next_scene_id
                    FROM game.history
                    JOIN game.history_has_scene ON history_has_scene.history_id = history.id
                    WHERE history.id = $1;`;
        // on envoie la requete en bdd avec la requete preparer et l'id passé en parametre
        const data = await db.query(sql, [id]);
        // on renvoie les data de la requete
        return data.rows;
    },

    findSceneTextById: async (id) => {
        // on prépare la requete
        const sql = `SELECT * FROM scene_text WHERE scene_id = $1;`;
        // on envoie la requete en bdd avec la requete preparer et l'id passé en parametre
        const data = await db.query(sql, [id]);
        // on renvoie les data de la requete
        return data.rows[0];
    },

    findSceneOpponnentById: async (id) => {
        // on prépare la requete
        const sql = `SELECT * FROM scene_opponent WHERE scene_id = $1;`;
        // on envoie la requete en bdd avec la requete preparer et l'id passé en parametre
        const data = await db.query(sql, [id]);
        // on renvoie les data de la requete
        return data.rows[0];
    },

    findSceneClickableElementById: async (id) => {
        // on prépare la requete
        const sql = `SELECT * FROM scene_clickable_element WHERE scene_id = $1;`;
        // on envoie la requete en bdd avec la requete preparer et l'id passé en parametre
        const data = await db.query(sql, [id]);
        // on renvoie les data de la requete
        return data.rows[0];
    },

    findSceneFinishById: async (id) => {
        // on prépare la requete
        const sql = `SELECT * FROM scene_finish WHERE scene_id = $1;`;
        // on envoie la requete en bdd avec la requete preparer et l'id passé en parametre
        const data = await db.query(sql, [id]);
        // on renvoie les data de la requete
        return data.rows[0];
    },
    
};

module.exports = game;