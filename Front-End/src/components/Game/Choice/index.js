import React from 'react';

import './choice.scss';

const Choice = () => (
  <div className="choice">
    <div className="choice__scene">
      <div className="choice__scene--left">
        <h1>Description</h1>
      </div>
      <div className="choice__scene--right">
        <p>Texte d'information pour le joueur</p>
        <div className="choice__scene--rightbuttons">
          <button type="button">Choix 1</button>
          <button type="button">Choix 2</button>
        </div>
      </div>
    </div>
  </div>
);

export default Choice;
