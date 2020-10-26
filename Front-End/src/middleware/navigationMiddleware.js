import axios from 'axios';
import {
  FETCH_GAMES,
  addGames,
  FETCH_GAMEDETAIL,
  addDataBoard,
  FETCH_DATABOARD,
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
    case FETCH_DATABOARD:
      console.log('je suis avant la requete axios');
      axios.get('http://34.207.247.234:3000/api/board',
        // withcredential à true permet d'envoyer
        // dans le header de ma requete le cookie correspondant à l'utilisateur concerné
        { withCredentials: true })
        .then((response) => {
          console.log('je suis APRES la requete axios');
          store.dispatch(addDataBoard(response.data.session));
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

export default navigationMiddleware;
