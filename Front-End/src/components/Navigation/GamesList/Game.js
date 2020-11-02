import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import backgroundhero from 'src/images/backgroundhero.jpg';
// eslint-disable-next-line import/no-unresolved
import rpgmaker from 'src/images/rpgmaker.jpg';

const Game = ({
  name, description, difficulty, id,
}) => (
  <div className="game">
    <div className="game__card">
      <img className="game__image" src={rpgmaker} alt="imgGames" />
      <div className="game__card--text">
        <h2 className="game__card__name">{name}</h2>
        <p className="game__card__difficulty">{difficulty}</p>
        <p className="game__card__description">{description}</p>
      </div>
      <Link to={`/liste-des-jeux/${id}`}><button type="button" className="game__card--button">Voir les détails</button></Link>
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
