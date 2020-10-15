import React from 'react';

import './style.scss';

const GamesList = () => (
  <div className="gamesList">
    <h1 className="gamesList__Title">Liste des jeux</h1>
    <div className="gamesList__Card">
      <img src="#" alt="imgGames" className="gamesList__Card__Img" />
      <div className="gamesList__Card__Infos">
        <h1 className="gamesList__Card__Title">Titre</h1>
        <p className="gamesList__Card__Difficulty">Difficulté</p>
        <p className="gamesList__Card__Theme">Thème</p>
        <div className="gamesList__Card__Button">Voir les détails</div>
      </div>
    </div>
  </div>
);

export default GamesList;
