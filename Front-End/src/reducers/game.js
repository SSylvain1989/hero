import {
  ADD_STORY,
  SELECT_CHARACTER,
  ADD_CHARACTER_LIST,
  SET_OPPONENT,
  ATTACK,
  RESET_STORY,
} from '../actions/game';

import prepareOpponentsFromStory from '../utils/prepareOpponentsFromStory';
import getCharactersByStory from '../selectors/getCharactersByStory';
import getCharacterById from '../selectors/getCharacterbyId';
import createPlayer from '../utils/createPlayer';
import damageCalculation from '../utils/damageCalculation';

export const initialState = {
  // ici on déclare un objet vide avec la propriété story qui sera rempli
  // au déclenchement du bouton "jouer maintenant"
  story: {
    history: {
      scene_list: [
        {
          details_scene: {
            scene_id: 0,
          },
          // img_opponent: '',
        },
      ],
      history_id: 0,
    },
  },
  isStoryLoaded: false,
  player: {},
  // playerIsAlive nous sert dans les batailles à savoir si le joueur est vivant ou mort
  playerIsAlive: true,
  // ici je mets le nom du joueur qui va recevoir des dégâts
  damageToDestName: '',
  playerSelected: false,
  opponentList: [],
  opponent: {
    isAlive: true,
  },
  // opponent sert ici à savoir si l'adversaire de notre utilisateur est en vie ou pas
  opponentIsAlive: true,
  characterList: [],
  // je rajoute logFight que je vais recuperer
  // dans mes composants histoire pour afficher les logs lors des batailles
  logOpponentFight: [],
  logPlayerFight: [],
};

const game = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_STORY: {
      // Préparer tous les opponents (non playable characters) de l'histoire
      const opponentList = prepareOpponentsFromStory({ ...action.story });
      return {
        ...state,
        story: {
          ...action.story,
        },
        playerSelected: false,
        isStoryLoaded: true,
        opponentList: [...opponentList],
      };
    }
    case RESET_STORY:
      return {
        ...initialState,
      };
    case SELECT_CHARACTER: {
      const chosenCharacter = getCharacterById(action.id, [...state.characterList]);
      const newPlayer = createPlayer(chosenCharacter);
      return {
        ...state,
        player: newPlayer,
        playerSelected: true,
      };
    }
    case ADD_CHARACTER_LIST: {
      const characterList = getCharactersByStory([...action.data.character], state.story);
      return {
        ...state,
        characterList: [...characterList],
      };
    }
    case SET_OPPONENT: {
      const opponent = state.opponentList.find((who) => who.id === action.id);
      return {
        ...state,
        opponent,
        opponentIsAlive: true,
      };
    }
    case ATTACK: {
      // calcul des dégats qu'on va infliger à l'adversaire (aléatoire et points d'attaque)
      // renvoie true si l'adversaire est en vie
      // renvoie false s'il est vaincu
      const [opponentIsAlive,
        destinationName,
        sourceName,
        damageBase, // nombre de degat de base
        trueDamage, // nombre de degat réel infligé suite à la défence de l'adversaire
        destHealtPoint] = damageCalculation(state.player, state.opponent);
      if (!opponentIsAlive) {
        state.opponent.isAlive = opponentIsAlive;
      }
      // calcul des dégats qu'on va subir par l'adversaire (aléatoire et points d'attaque)
      // renvoie true si nous sommes en vie
      // renvoie false si nous sommes vaincu
      else {
        const [playerIsAlive,
          damageToDestName, // degat fait à
          damageByName, // degat fait part
          baseDamage, // nombre de degat de base
          reelDamage, // nombre de degat réel infligé suite à la défence de l'adversaire
          opponentHealtMax] = damageCalculation(state.opponent, state.player);
        // si le joueur n'est pas mort
        if (!playerIsAlive) {
          return {
            ...state,
            playerIsAlive,
          };
        }
        // je retourne les valeurs de damageCalculation(fichier utils) dans mon state
        // pour faire mes logs dans mon compnt Battle
        return {
          ...state,
          // logOpponentFight : vision des dégats vu de l'adversaire
          logOpponentFight: [opponentIsAlive,
            destinationName,
            sourceName,
            damageBase,
            trueDamage,
            destHealtPoint],
          // logPlayerFight : vision des dégats vu du joueur
          logPlayerFight: [playerIsAlive,
            damageToDestName,
            damageByName,
            baseDamage,
            reelDamage,
            opponentHealtMax],
        };
      }
      // si personne ne meurt, on attend une nouvelle action
      return { ...state, opponentIsAlive };
    }
    default:
      return state;
  }
};

export default game;
