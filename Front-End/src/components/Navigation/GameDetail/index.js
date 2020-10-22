import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
>>>>>>> 82f9f7dac7631368158dedd0eb722f4ebeb1ea4e

import './gamedetail.scss';

const GameDetail = ({ fetchGameDetail, loadStory, gameId }) => {
  useEffect(() => {
    fetchGameDetail();
  }, []);
  // const Start = ({ loadStory }) => {
  //   useEffect(() => {
  //     // qqch pour récupérer l'histoire
  //     loadStory();
  //   }, []);

  return (
    <div className="game-detail">
      <div className="game-detail__container">
        <div className="game-detail__content">
          <h1 className="game-detail__title">Il faut sauver le petit chiot!</h1>
          <p>Notation</p>
          <img src="https://picsum.photos/id/237/80/80" alt="" />
          <div>
<<<<<<< HEAD
            <button type="button" className="game-detail__button" onClick={loadStory}><Link to={`/liste-des-jeux/${gameId}/1`}>Jouer maintenant</Link></button>
=======
            <button type="button" className="game-detail__button" onClick={loadStory}>
              <NavLink
                to="/testStart"
                exact
              >
                Jouer maintenant
              </NavLink>
            </button>

>>>>>>> 82f9f7dac7631368158dedd0eb722f4ebeb1ea4e
          </div>
          <section className="game-detail__section">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis quae expedita! Consequuntur perspiciatis optio minima obcaecati accusantium culpa expedita quod natus quo odit, amet est non! Dolores, aliquam obcaecati.</section>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = ({
  fetchGameDetail: PropTypes.func.isRequired,
  loadStory: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired,
});

export default GameDetail;
