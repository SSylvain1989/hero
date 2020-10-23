const getGameDetailById = (gameId, games) => games.find(
  (game) => game.id === gameId,
);

export default getGameDetailById;
