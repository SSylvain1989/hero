import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './gamedetail.scss';

<<<<<<< HEAD
const GameDetail = ({
  fetchGameDetail, loadStory, gameId, isStoryLoaded, game,
}) => {
=======
const GameDetail = ({ fetchGameDetail, loadStory, gameId }) => {
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
  useEffect(() => {
    fetchGameDetail();
  }, []);

  return (
    <div className="game-detail">
      <div className="game-detail__container">
        <div className="game-detail__content">
          <h1 className="game-detail__title">{game.name}</h1>
          <p>Difficulté: {game.difficulty}</p>
          <img src="https://picsum.photos/id/237/80/80" alt="" />
          <div>
<<<<<<< HEAD
            {!isStoryLoaded
              ? <button type="button" className="game-detail__button" onClick={loadStory}>Charger le jeu</button>
              : <Link to={`/liste-des-jeux/${gameId}/1`}><button type="button" className="game-detail__button" onClick={loadStory}>Jouer</button></Link>}
=======
            <button type="button" className="game-detail__button" onClick={loadStory}><Link to={`/liste-des-jeux/${gameId}/1`}>Jouer maintenant</Link></button>
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
          </div>
          <section className="game-detail__section">{game.description}</section>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = ({
  fetchGameDetail: PropTypes.func.isRequired,
  loadStory: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired,
<<<<<<< HEAD
  isStoryLoaded: PropTypes.bool.isRequired,
  game: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
=======
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
});

export default GameDetail;
