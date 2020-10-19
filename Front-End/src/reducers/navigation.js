import { ADD_GAMES } from '../actions/navigation';

const initialState = {
  games:
  [
  ],
};

const navigation = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GAMES:
      return {
        ...state,
        games: [...action.games],
      };
    default:
      return state;
  }
};

export default navigation;
