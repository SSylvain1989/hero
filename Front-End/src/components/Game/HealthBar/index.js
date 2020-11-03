import React from 'react';
import PropTypes from 'prop-types';

import './healthbar.scss';

const HealthBar = ({ current, max }) => {
  // Calculer les pourcentages de pv du personnage
  const healthPercent = (current / max) * 100;

  // On définit une couleur par rapport au pourcentage de pv
  let backgroundColor = 100;
  // Si la vie est supperieur a 50%
  if (healthPercent >= 50) {
    backgroundColor = '#aacc00';
    //backgroundColor = 'greenyellow';
    // Sinon Si la vie est entre 50 et 25%
  }
  else if (healthPercent < 50 && healthPercent >= 25) {
    backgroundColor = 'orange';
    // Sinon la vie est en dessous de 25%
  }
  else {
    backgroundColor = 'red';
  }
  // On définit le style de la barre actuelle de points de vie
  // cf doc style en React pour le format
  const divStyle = {
    backgroundColor,
    borderRadius: 10,
    width: `${healthPercent}%`,
    height: '100%',
  };
  return (
    <div className="health-bar">
      <p className="health-bar__text">
        Points de vie :
      </p>
      <div className="health-bar__bar-total">
        <div style={divStyle} />
      </div>
    </div>
  );
};

// On établit un schéma pour la healthbar
HealthBar.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default HealthBar;
