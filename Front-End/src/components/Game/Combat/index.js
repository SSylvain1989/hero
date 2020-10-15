// == Import npm
import React from 'react';

// == Import

// == Composant
const Combat = () => (
  <div className="combat">
    <div className="combat__scene">
      <div className="combat__opponent">
        <h1>Nom adversaire</h1>
        <p>Vie adversaire</p>
      </div>
      <div className="combat__actions">
        <button type="button">Fiche personnage</button>
        <button type="button">Attaquer</button>
        <button type="button">Défendre</button>
      </div>
      <img
        src=""
        alt="Fiche personnage"
      />
    </div>
  </div>
);

// == Export
export default Combat;
