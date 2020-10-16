export const ADD_GAMES = 'ADD_GAMES';
export const FETCH_GAMES = 'FETCH_GAMES';

export const addGames = (games) => ({
  type: ADD_GAMES,
  games,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});
