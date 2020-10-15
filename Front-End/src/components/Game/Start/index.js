// == Import npm
import React from 'react';

// == Import

// == Import scss
import './start.scss';

// == Composant
const Start = () => (
  <div className="start">
    <div className="start__scene">
      <div className="start__scene--left">
        <img
          src=""
          alt="Donneur de quète"
        />
      </div>
      <div className="start__scene--right">
        <p>Texte de description de l'histoire à suivre</p>
        <div className="start__scene--rightbuttons">
          <button type="button">Passer</button>
          <button type="button">Démarrer</button>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Start;
