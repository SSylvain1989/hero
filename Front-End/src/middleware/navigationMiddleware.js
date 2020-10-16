import axios from 'axios';
import { FETCH_GAMES, addGames } from '../actions/navigation';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get('http://localhost:3000/api/stories')
        .then((response) => {
          store.dispatch(addGames(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default logMiddleware;
