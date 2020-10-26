import {
  ADD_STORY,
  SELECT_CHARACTER,
  ADD_CHARACTER_LIST,
} from '../actions/game';
import history from '../data/histoire1';

import getCharacterById from '../selectors/getCharacterbyId';
import createPlayer from '../utils/createPlayer';

export const initialState = {
  // ici on déclare un objet vide avec la propriété story qui sera rempli
  // au déclenchement du bouton "jouer maintenant"
  story: {...history},
  isStoryLoaded: false,
  player: {},
  playerSelected: false,
  characterList: [],
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
    case SELECT_CHARACTER: {
      const chosenCharacter = getCharacterById(action.id, [...state.characterList]);
      const newPlayer = createPlayer(chosenCharacter);
      //console.log(newPlayer);
      return {
        ...state,
        player: newPlayer,
        playerSelected: true,
      };
    }
    case ADD_CHARACTER_LIST:
      return {
        ...state,
        characterList: [...action.data.character],
      };
    default:
      return state;
  }
};

export default game;
