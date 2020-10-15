import React from 'react';
import Footer from '../Footer';

import './style.scss';

const GameDetail = () => (
  <>
    <div className="GameDetail">
      <div className="GameDetail__background">
        <div className="GameDetail__container">
          <div className="GameDetail__content">
            <h1 className="GameDetail__title">Il faut sauver le petit chiot!</h1>
            <img src="https://picsum.photos/id/237/80/80" alt="" />
            <div>
              <button type="button" className="GameDetail__button">Jouer maintenant</button>
            </div>
            <section className="GameDetail__section">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus veritatis quae expedita! Consequuntur perspiciatis optio minima obcaecati accusantium culpa expedita quod natus quo odit, amet est non! Dolores, aliquam obcaecati.</section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default GameDetail;
