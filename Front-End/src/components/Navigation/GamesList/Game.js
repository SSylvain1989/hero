import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, difficulty }) => (
  <div className="game">
    <div className="game__card">
      <img src="#" alt="imgGames" />
      <h2>{name}</h2>
      <p>{difficulty}</p>
      <p>{description}</p>
      <button type="button">Voir les détails</button>
    </div>
  </div>
);

Game.propTypes = ({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
});

export default Game;
