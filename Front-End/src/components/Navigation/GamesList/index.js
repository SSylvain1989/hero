import React from 'react';

import './gameslist.scss';
import Game from './Game';

const GamesList = () => (
  <div className="games-list">
    <h1>Liste des jeux</h1>
    <div className="games-list__item">
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  </div>
);

export default GamesList;
