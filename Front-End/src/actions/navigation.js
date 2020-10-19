// ACTION
export const ADD_GAMES = 'ADD_GAMES';
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMEDETAIL = 'FETCH_GAMEDETAIL';

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
