import {
  ADD_STORY,
} from '../actions/game';

export const initialState = {
  story: {},
};

const game = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_STORY:
      return {
        ...state,
        story: {
          ...action.story,
        },
      };
    default:
      return state;
  }
};

export default game;
