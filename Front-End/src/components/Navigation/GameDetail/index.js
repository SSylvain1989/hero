import React from 'react';

import './gamedetail.scss';

const GameDetail = () => (
  <div className="game-detail">
    <div className="game-detail__container">
      <div className="game-detail__content">
        <h1 className="game-detail__title">Il faut sauver le petit chiot!</h1>
        <p>Notation</p>
        <img src="https://picsum.photos/id/237/80/80" alt="" />
        <div>
          <button type="button" className="game-detail__button">Jouer maintenant</button>
        </div>
        <section className="game-detail__section">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis quae expedita! Consequuntur perspiciatis optio minima obcaecati accusantium culpa expedita quod natus quo odit, amet est non! Dolores, aliquam obcaecati.</section>
      </div>
    </div>
  </div>
);

export default GameDetail;
