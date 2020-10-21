import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './gamedetail.scss';

const GameDetail = ({ fetchGameDetail, loadStory }) => {
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
            <button type="button" className="game-detail__button" onClick={loadStory}>
              <Link to="/discussion">Jouer maintenant
              </Link>
            </button>
          </div>
          <section className="game-detail__section">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis quae expedita! Consequuntur perspiciatis optio minima obcaecati accusantium culpa expedita quod natus quo odit, amet est non! Dolores, aliquam obcaecati.</section>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = ({
  fetchGameDetail: PropTypes.func.isRequired,
});

export default GameDetail;
