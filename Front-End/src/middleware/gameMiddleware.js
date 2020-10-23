import axios from 'axios';

import {
  LOAD_ONE_STORY,
  addStory,
} from '../actions/game';

const gameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ONE_STORY:
      axios.get('http://34.207.247.234:3000/api/stories/1/play')
        .then((response) => {
          console.log(response.data);
          store.dispatch(addStory(response.data));
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default gameMiddleware;
