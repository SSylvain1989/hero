import axios from 'axios';
import {
  FETCH_GAMES,
  addGames,
  addDataBoard,
  FETCH_DATABOARD,
} from '../actions/navigation';

import baseURL from '../config';

const navigationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get(`${baseURL}/api/stories`)
        .then((response) => {
          store.dispatch(addGames(response.data.historylist));
        })
        .catch(() => {
        });
      next(action);
      break;
    case FETCH_DATABOARD:
      axios.get(`${baseURL}/api/board`,
        // withcredential à true permet d'envoyer
        // dans le header de ma requete le cookie correspondant à l'utilisateur concerné
        { withCredentials: true })
        .then((response) => {
          store.dispatch(addDataBoard(response.data.session));
        })
        .catch(() => {
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default navigationMiddleware;
