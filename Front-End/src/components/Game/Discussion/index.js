// == Import : npm
import React from 'react';

// == Import : local
import './discussion.scss';

// == Composant
const Discussion = () => (
  <div className="discussion">
    <div className="discussion__scene">
      <div className="discussion__scene--left">
        <h1>Description</h1>
      </div>
      <div className="discussion__scene--right">
        <p>Texte d'information pour le joueur</p>
        <div className="discussion__scene--rightbuttons">
          <button type="button">Retour</button>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Discussion;
