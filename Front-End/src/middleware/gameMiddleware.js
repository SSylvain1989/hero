import axios from 'axios';

import {
  LOAD_ONE_STORY,
  LOAD_CHARACTER_LIST,
  addStory,
  addCharacterList,
  SEND_END_DETAILS,
} from '../actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ONE_STORY:
      axios.get(`http://34.207.247.234:3000/api/stories/${action.gameId}/play`,
        { withCredentials: true })
        .then((response) => {
          store.dispatch(addStory(response.data));
        }).catch((error) => {
        });
      next(action);
      break;
    case LOAD_CHARACTER_LIST:
      axios.get('http://34.207.247.234:3000/api/characters',
        { withCredentials: true })
        .then((response) => {
          store.dispatch(addCharacterList(response.data));
        }).catch((error) => {
        });
      next(action);
      break;
    case SEND_END_DETAILS: {
      // Vérification si on a un game over ou pas
      let gameWin = true;
      if (action.sceneName === 'game_over' || action.sceneName === 'game over') {
        gameWin = false;
      }
      // Récupération du character_id
      const characterId = store.getState().game.player.id;
      // Création des data à envoyer sur la route POST
      const data = {
        character_id: characterId,
        gameWin,
      };
      // Route POST pour update les parties jouées, gagnées ou perdues
      axios.post(`http://34.207.247.234:3000/api/stories/${action.storyId}/finish`,
        { ...data },
        { withCredentials: true });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default gameMiddleware;
