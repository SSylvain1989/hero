export const LOAD_ONE_STORY = 'LOAD_ONE_STORY';
export const ADD_STORY = 'ADD_STORY';

export const LOAD_CHARACTER_LIST = 'LOAD_CHARACTER_LIST';
export const ADD_CHARACTER_LIST = 'ADD_CHARACTER_LIST';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export const SET_OPPONENT = 'SET_OPPONENT';
export const ATTACK = 'ATTACK';

export const loadStory = () => ({
  type: LOAD_ONE_STORY,
});

export const addStory = (story) => ({
  type: ADD_STORY,
  // cle de l'action ADD_STORY ici story ci-dessous
  story,
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

export const setOpponent = (sceneDetails) => ({
  type: SET_OPPONENT,
  sceneDetails,
});

export const attack = () => ({
  type: ATTACK,
});
