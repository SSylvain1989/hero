// ACTION
export const ADD_GAMES = 'ADD_GAMES'; // déclenché dans navigationMiddleware
export const FETCH_GAMES = 'FETCH_GAMES'; // qui lance FETCH_GAMES dans navigationMiddleware
export const FETCH_GAMEDETAIL = 'FETCH_GAMEDETAIL'; // déclenché dans navigationMiddleware

// ACTION CREATION
export const addGames = (games) => ({
  type: ADD_GAMES,
  games,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchGameDetail = () => ({
  type: FETCH_GAMEDETAIL,
});
