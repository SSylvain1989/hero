// == Import npm
import React from 'react';

import './battle.scss';
// == Import

// == Composant
const Battle = () => (
  <div className="battle">
    <div className="battle__scene">
      <div className="battle__opponent">
        <h1>Nom adversaire</h1>
        <p>Vie adversaire</p>
      </div>
      <button className="battle__actions--attack" type="button">Attaquer</button>
      <button className="battle__actions--defense" type="button">Défendre</button>
      <img
        src=""
        alt="Fiche personnage"
      />
    </div>
  </div>
);

// == Export
export default Battle;
