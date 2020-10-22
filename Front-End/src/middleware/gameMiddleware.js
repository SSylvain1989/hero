import axios from 'axios';
import history from '../data/histoire1';

import {
  LOAD_ONE_STORY,
  addStory,
} from '../actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ONE_STORY:
      // axios.get('http://34.207.247.234:3000/api/stories/1')
      //   .then((response) => {
          store.dispatch(addStory(history));
        // });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default gameMiddleware;
