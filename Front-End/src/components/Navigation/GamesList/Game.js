import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Game = ({ name, description, difficulty, id }) => (
  <div className="game">
    <div className="game__card">
      <img src="#" alt="imgGames" />
      <h2>{name}</h2>
      <p>{difficulty}</p>
      <p>{description}</p>
      <button type="button"><Link to={`/liste-des-jeux/${id}`}>Voir les détails</Link></button>
    </div>
  </div>
);

Game.propTypes = ({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export default Game;
