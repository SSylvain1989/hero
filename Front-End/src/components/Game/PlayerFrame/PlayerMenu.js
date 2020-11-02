// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import HealthBar from '../HealthBar';
// == Import
import './playerMenu.scss';

// == Composant
const PlayerMenu = ({
  isToggled, name, attackPoint, defensePoint, healthPoint,
}) => (
  <>
    {isToggled && (
    <div className="player-menu">
      <div className="player-menu__header">
        <h1>{name}</h1>
      </div>
      <div className="player-menu__stats">
        <HealthBar
          current={healthPoint.current}
          max={healthPoint.max}
        />
        <p>Attaque : {attackPoint}</p>
        <p>Défense : {defensePoint}</p>
      </div>
    </div>
    )}
  </>
);

// == PropTypes
PlayerMenu.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  attackPoint: PropTypes.number.isRequired,
  defensePoint: PropTypes.number.isRequired,
  healthPoint: PropTypes.shape({
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

// == Export
export default PlayerMenu;
