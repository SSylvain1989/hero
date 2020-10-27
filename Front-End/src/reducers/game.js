import {
  ADD_STORY,
  SELECT_CHARACTER,
  ADD_CHARACTER_LIST,
  SET_OPPONENT,
  ATTACK,
} from '../actions/game';

import createOpponentFromScene from '../utils/createOpponentFromScene';
import getCharacterById from '../selectors/getCharacterbyId';
import createPlayer from '../utils/createPlayer';
import damageCalculation from '../utils/damageCalculation';

export const initialState = {
  // ici on déclare un objet vide avec la propriété story qui sera rempli
  // au déclenchement du bouton "jouer maintenant"
  story: {},
  isStoryLoaded: false,
  player: {},
  playerIsAlive: true,
  playerSelected: false,
  opponent: {},
  opponentIsAlive: true,
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
        playerSelected: false,
        isStoryLoaded: true,
      };
    case SELECT_CHARACTER: {
      const chosenCharacter = getCharacterById(action.id, [...state.characterList]);
      const newPlayer = createPlayer(chosenCharacter);
      // console.log(newPlayer);
      return {
        ...state,
        player: newPlayer,
        playerSelected: true,
        playerIsAlive: true,
      };
    }
    case ADD_CHARACTER_LIST:
      return {
        ...state,
        characterList: [...action.data.character],
      };
    case SET_OPPONENT: {
      const opponent = createOpponentFromScene(action.sceneDetails);
      return {
        ...state,
        opponent,
      };
    }
    case ATTACK: {
      // calcul des dégats qu'on va infliger à l'adversaire (aléatoire et points d'attaque)
      // renvoie true si l'adversaire est en vie
      // renvoie false s'il est vaincu
      const opponentIsAlive = damageCalculation(state.player, state.opponent);

      if (!opponentIsAlive) {
        return {
          ...state,
          opponentIsAlive: false,
        };
      }

      // calcul des dégats qu'on va subir par l'adversaire (aléatoire et points d'attaque)
      // renvoie true si nous sommes en vie
      // renvoie false si nous sommes vaincu
      const playerIsAlive = damageCalculation(state.opponent, state.player);

      if (!playerIsAlive) {
        return {
          ...state,
          playerIsAlive: false,
        };
      }

      // si personne ne meurt, on attend une nouvelle action
      return { ...state };
    }
    default:
      return state;
  }
};

export default game;
