import {
  ADD_STORY,
} from '../actions/game';
import history from '../data/histoire1';

export const initialState = {
  // ici on déclare un objet vide avec la propriété story qui sera rempli
  // au déclenchement du bouton "jouer maintenant"
  story: {...history},
  isStoryLoaded: false,
};

const game = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_STORY:
      return {
        ...state,
        story: {
          ...action.story,
        },
        isStoryLoaded: true,
      };
    default:
      return state;
  }
};

export default game;
