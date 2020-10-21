// == Import npm
import React from 'react';

// == Import
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';
// == Import scss
import './start.scss';

// == Composant
const Start = ({ loadStory }) => (
  <div className="start">
    <div className="start__scene">
      <img
        src={startMinautor}
        alt="mooving-minautor"
      />
      <div className="start__scene--left" />
      <div className="start__scene--right">
        <div className="start__scene--right-text">
          <p>Texte de description de l'histoire à suivre</p>
          <img
            src={parchemin}
            alt="parchemin"
          />
        </div>
        <div className="start__scene--right-buttons">
          <button type="button">Passer</button>
          <button type="button">Démarrer</button>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Start;
