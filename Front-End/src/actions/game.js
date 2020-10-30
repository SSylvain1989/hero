export const LOAD_ONE_STORY = 'LOAD_ONE_STORY';
export const ADD_STORY = 'ADD_STORY';
export const RESET_STORY = 'RESET_STORY';
export const LOAD_CHARACTER_LIST = 'LOAD_CHARACTER_LIST';
export const ADD_CHARACTER_LIST = 'ADD_CHARACTER_LIST';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';
// Sylvain : je rajoute une action qui va dispatch à chaque attaque de nouveaux log FIGHT
export const ADD_LOG_FIGHT = 'ADD_LOG_FIGHT';

export const SET_OPPONENT = 'SET_OPPONENT';
export const ATTACK = 'ATTACK';

export const SEND_END_DETAILS = 'SEND_END_DETAILS';

export const loadStory = (gameId) => ({
  type: LOAD_ONE_STORY,
  gameId,
});

export const addStory = (story) => ({
  type: ADD_STORY,
  // cle de l'action ADD_STORY ici story ci-dessous
  story,
});

export const resetStory = () => ({
  type: RESET_STORY,
});

export const loadCharacterList = () => ({
  type: LOAD_CHARACTER_LIST,
});

export const addCharacterList = (data) => ({
  type: ADD_CHARACTER_LIST,
  data,
});

export const selectCharacter = (id) => ({
  type: SELECT_CHARACTER,
  id,
});

export const setOpponent = (id) => ({
  type: SET_OPPONENT,
  id,
});

export const attack = () => ({
  type: ATTACK,
});

export const endGame = (storyId, sceneName) => ({
  type: SEND_END_DETAILS,
  sceneName,
  storyId,
});
