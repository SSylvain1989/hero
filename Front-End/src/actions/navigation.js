// ACTION
export const ADD_GAMES = 'ADD_GAMES'; // déclenché dans navigationMiddleware
export const FETCH_GAMES = 'FETCH_GAMES'; // qui lance ADD_GAMES dans navigationMiddleware
export const FETCH_DATABOARD = 'FETCH_DATABOARD'; // déclenché dans Board navigationMidlleware qui lance ADD_DATABOARD
export const ADD_DATABOARD = 'ADD_DATABOARD'; // déclenché dans navigationMidlleware qui stock les data en STORE

// ACTION CREATION
export const addGames = (games) => ({
  type: ADD_GAMES,
  games,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchDataBoard = () => ({
  type: FETCH_DATABOARD,
});

export const addDataBoard = (dataBoard) => ({
  type: ADD_DATABOARD,
  dataBoard,
});
