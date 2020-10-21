export const LOAD_ONE_STORY = 'LOAD_ONE_STORY';
export const ADD_STORY = 'ADD_STORY';

export const loadStory = () => ({
  type: LOAD_ONE_STORY,
});

export const addStory = (story) => ({
  type: ADD_STORY,
  // cle de l'action ADD_STORY ici story ci-dessous
  story,
});
