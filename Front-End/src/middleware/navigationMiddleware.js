import axios from 'axios';
import {
  FETCH_GAMES,
  addGames,
  FETCH_GAMEDETAIL,
} from '../actions/navigation';

const navigationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get('http://34.207.247.234:3000/api/stories')
        .then((response) => {
          store.dispatch(addGames(response.data.historylist));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case FETCH_GAMEDETAIL:
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default navigationMiddleware;
