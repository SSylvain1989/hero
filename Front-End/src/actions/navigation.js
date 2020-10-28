// ACTION
export const ADD_GAMES = 'ADD_GAMES'; // déclenché dans navigationMiddleware
export const FETCH_GAMES = 'FETCH_GAMES'; // qui lance ADD_GAMES dans navigationMiddleware
<<<<<<< HEAD
export const FETCH_GAMEDETAIL = 'FETCH_GAMEDETAIL'; // déclenché dans navigationMiddleware
=======
>>>>>>> e5b7d2342b301a8cd49ef80949beb72715331753
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

export const fetchDataBoard = () => ({
  type: FETCH_DATABOARD,
});

export const addDataBoard = (dataBoard) => ({
  type: ADD_DATABOARD,
  dataBoard,
});
