// On récupère le models game
const game = require('../models/game');

const gameController = {
    getHistory: async (request, response) => {
        try {
            // on attend le retour de la methode qui recupère une histoire par son id
            const oneHistory = await game.findHistoryById(request.params.id);

            const sceneTab = [];

            for (let index = 1; index <= 11; index++) {
                if (index === 1 || index === 3 || index === 5 || index === 6 || index === 8) {
                    const oneScene = await game.findSceneTextById(index);
                    sceneTab.push(oneScene);
                };
                if (index === 4) {
                    const oneScene = await game.findSceneOpponnentById(index);
                    sceneTab.push(oneScene);
                };
                if (index === 2 || index === 7) {
                    const oneScene = await game.findSceneClickableElementById(index);
                    sceneTab.push(oneScene);
                };
                if (index === 9 || index === 10 || index === 11) {
                    const oneScene = await game.findSceneFinishById(index);
                    sceneTab.push(oneScene);
                };
            };

            const history = { // je configure l'objet de l'histoire
                history_id: oneHistory[0].history_id,
                history_name: oneHistory[0].history_name,
                history_description: oneHistory[0].history_description,
                history_difficulty: oneHistory[0].history_difficulty,
                scene_list: [
                    {
                        details_scene: sceneTab[0],
                        previous_scene_id: oneHistory[0].previous_scene_id,
                        next_scene_id: oneHistory[0].next_scene_id
                    },
                    {
                        details_scene: sceneTab[1],
                        previous_scene_id: oneHistory[1].previous_scene_id,
                        next_scene_id: oneHistory[1].next_scene_id,
                        next_scene_id2: oneHistory[2].next_scene_id
                    },
                    {
                        details_scene: sceneTab[2],
                        previous_scene_id: oneHistory[3].previous_scene_id,
                        next_scene_id: oneHistory[3].next_scene_id,
                        next_scene_id2: oneHistory[4].next_scene_id
                    },
                    {
                        details_scene: sceneTab[3],
                        previous_scene_id: oneHistory[5].previous_scene_id,
                        next_scene_id: oneHistory[5].next_scene_id,
                        next_scene_id2: oneHistory[6].next_scene_id
                    },
                    {
                        details_scene: sceneTab[4],
                        previous_scene_id: oneHistory[7].previous_scene_id,
                        next_scene_id: oneHistory[7].next_scene_id
                    },
                    {
                        details_scene: sceneTab[5],
                        previous_scene_id: oneHistory[8].previous_scene_id,
                        next_scene_id: oneHistory[8].next_scene_id,
                        next_scene_id2: oneHistory[9].next_scene_id
                    },
                    {
                        details_scene: sceneTab[6],
                        previous_scene_id: oneHistory[10].previous_scene_id,
                        next_scene_id: oneHistory[10].next_scene_id
                    },
                    {
                        details_scene: sceneTab[7],
                        previous_scene_id: oneHistory[11].previous_scene_id,
                        next_scene_id: oneHistory[11].next_scene_id,
                        next_scene_id2: oneHistory[12].next_scene_id
                    },
                    {
                        details_scene: sceneTab[8],
                        previous_scene_id: oneHistory[13].previous_scene_id,
                        next_scene_id: oneHistory[13].next_scene_id
                    },
                    {
                        details_scene: sceneTab[9],
                        previous_scene_id: oneHistory[14].previous_scene_id,
                        next_scene_id: oneHistory[14].next_scene_id
                    },
                    {
                        details_scene: sceneTab[10],
                        previous_scene_id: oneHistory[15].previous_scene_id,
                        next_scene_id: oneHistory[15].next_scene_id
                    },
                ]
            };

            response.status(200).json({history: history, session: request.session.user});
        } catch (error) {
            console.trace(error);
            return response.status(500).json(error.tostring());
        };
    },
};

module.exports = gameController;