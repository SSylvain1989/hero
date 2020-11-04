import { ADD_GAMES, ADD_DATABOARD } from '../actions/navigation';

const initialState = {
  // ici on déclare un tableau vide avec la propriété games qui sera rempli plus tard
  games:
    [
    ],
  dataBoard:
    {},
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
    case ADD_DATABOARD:
      return {
        ...state,
        dataBoard: { ...action.dataBoard },
      };
  }
};

export default navigation;
