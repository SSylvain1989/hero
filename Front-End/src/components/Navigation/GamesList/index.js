import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './gameslist.scss';
import Game from './Game';

const GamesList = ({
  fetchGames,
  gamesList,
  resetStory,
}) => {
  useEffect(() => {
    fetchGames();
    resetStory();
  }, []);

  return (
    <div className="games-list">
      <h1 className="games-list__title">Liste des jeux</h1>
      <div className="games-list__item">
        {gamesList.map((game) => (
          <Game
            key={game.id}
            {...game}
          />
        ))}
      </div>
    </div>
  );
};

GamesList.propTypes = {
  fetchGames: PropTypes.func.isRequired,
  gamesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  resetStory: PropTypes.func.isRequired,
};

export default GamesList;
