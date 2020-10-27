// On récupère le models game
const game = require('../models/game');

const gameController = {
    /**
     * Sert a récupérer tout les personnages jouable
     * @returns {object} 200 - La liste des personnages jouable et la session
     */
    getAllCharacter: async (request, response) => {
        try {
            // on recupère tout les personnable jouable
            const allCharacter = await game.findAllCharacter();

            response.status(200).json({character: allCharacter, session: request.session.user});
        } catch (error) {
            console.trace(error);
            return response.status(500).json(error.tostring());  
        };
    },
    /**
     * Sert a récupérer une histoire et toute ses scène (Pour le moment seulement l'histoire 1)
     * @param number - id de l'histoire passé en slug
     * @returns {object} 200 - L'histoire complète et la session
     */
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
                    if (index === 2) {
                        const data = {
                            scene_id: oneScene[0].scene_id,
                            scene_name: oneScene[0].scene_name,
                            scene_description: oneScene[0].scene_description,
                            scene_type: oneScene[0].scene_type,
                            clickable_element: {
                                clickable_element_name: oneScene[0].clickable_element_name,
                                clickable_element_shape: oneScene[0].clickable_element_shape,
                                clickable_element_coords: oneScene[0].clickable_element_coords
                            },
                            clickable_element2: {
                                clickable_element_name: oneScene[1].clickable_element_name,
                                clickable_element_shape: oneScene[1].clickable_element_shape,
                                clickable_element_coords: oneScene[1].clickable_element_coords
                            }
                        };
                        sceneTab.push(data);
                    } else {
                        sceneTab.push(oneScene[0]);
                    };
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
                    { // Scene 1
                        details_scene: sceneTab[0],
                        previous_scene_id: oneHistory[0].previous_scene_id,
                        next_scene_id: oneHistory[0].next_scene_id,
                        next_scene_name: 'Démarrer',
                        img_scene: 'https://i.ibb.co/9tjk959/Alcatraz-01.png'
                    },
                    { // Scene 2
                        details_scene: sceneTab[1],
                        previous_scene_id: oneHistory[1].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[1].next_scene_id,
                            next_scene_name: 'Vieillard'
                        },
                        next_scene2: {
                            next_scene_id2: oneHistory[2].next_scene_id,
                            next_scene_name2: 'Porte'
                        },
                        img_scene: 'https://i.ibb.co/7zMgn0v/cellule-01.png'
                    },
                    { // Scene 3
                        details_scene: sceneTab[2],
                        previous_scene_id: oneHistory[3].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[3].next_scene_id,
                            next_scene_name: 'Combattre'
                        },
                        next_scene2: {
                            next_scene_id2: oneHistory[4].next_scene_id,
                            next_scene_name2: 'Discuter'
                        },
                        img_scene: 'https://i.ibb.co/7zMgn0v/cellule-01.png'
                    },
                    { // Scene 4
                        details_scene: sceneTab[3],
                        previous_scene_id: oneHistory[5].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[5].next_scene_id,
                            next_scene_name: 'Suite'
                        },
                        next_scene2: {
                            next_scene_id2: oneHistory[6].next_scene_id,
                            next_scene_name2: 'GameOver'
                        },
                        img_scene: 'https://i.ibb.co/7zMgn0v/cellule-01.png'
                    },
                    { // Scene 5
                        details_scene: sceneTab[4],
                        previous_scene_id: oneHistory[7].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[7].next_scene_id,
                            next_scene_name: 'Suite'
                        },
                        img_scene: 'https://i.ibb.co/7zMgn0v/cellule-01.png'
                    },
                    { // Scene 6
                        details_scene: sceneTab[5],
                        previous_scene_id: oneHistory[8].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[8].next_scene_id,
                            next_scene_name: 'Sortir'
                        },
                        next_scene2: {
                            next_scene_id2: oneHistory[9].next_scene_id,
                            next_scene_name2: `Revenir a l'entrée`
                        },
                        img_scene: 'https://i.ibb.co/7zMgn0v/cellule-01.png'
                    },
                    { // Scene 7
                        details_scene: sceneTab[6],
                        previous_scene_id: oneHistory[10].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[10].next_scene_id,
                            next_scene_name: 'Barque'
                        },
                        img_scene: 'https://i.ibb.co/hYz5yrG/Bord-de-mer-barque-01.png'
                    },
                    { // Scene 8
                        details_scene: sceneTab[7],
                        previous_scene_id: oneHistory[11].previous_scene_id,
                        next_scene: {
                            next_scene_id: oneHistory[11].next_scene_id,
                            next_scene_name: 'Si le vieillard est en vie'
                        },
                        next_scene2: {
                            next_scene_id2: oneHistory[12].next_scene_id,
                            next_scene_name2: `Si le veillard est mort`
                        },
                        finish_text: `Suite`,
                        img_scene: 'https://i.ibb.co/hYz5yrG/Bord-de-mer-barque-01.png'
                    },
                    { // Scene 9
                        details_scene: sceneTab[8],
                        previous_scene_id: oneHistory[13].previous_scene_id,
                        finish_text: `Game Over, Vous etes mort !`
                    },
                    { // Scene 10
                        details_scene: sceneTab[9],
                        previous_scene_id: oneHistory[14].previous_scene_id,
                        finish_text: `Bravo, vous avez terminé le jeu mais vous etes maudit !`
                    },
                    { // Scene 11
                        details_scene: sceneTab[10],
                        previous_scene_id: oneHistory[15].previous_scene_id,
                        finish_text: `Bravo, vous avez terminé le jeu en ayant levé la malédiction !`
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