import axios from 'axios';

import {
  LOAD_ONE_STORY,
  LOAD_CHARACTER_LIST,
  addStory,
  addCharacterList,
} from '../actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ONE_STORY:
      axios.get('http://34.207.247.234:3000/api/stories/1/play',
        { withCredentials: true })
        .then((response) => {
          store.dispatch(addStory(response.data));
        });
      next(action);
      break;
    case LOAD_CHARACTER_LIST:
      axios.get('http://34.207.247.234:3000/api/characters',
        { withCredentials: true })
        .then((response) => {
          console.log(response.data);
          store.dispatch(addCharacterList(response.data));
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default gameMiddleware;