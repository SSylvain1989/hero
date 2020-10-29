// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

// == Composant
const OpponentFrame = ({
  opponent,
}) => {
  console.log('toto', opponent);
  return (

    <div className="opponent-frame">
      <h1>{opponent.name}</h1>
      <p>point(s) d'attaque : {opponent.attackPoint}</p>
      <p>point(s) de défense : {opponent.defensePoint}</p>
      <p>point(s) de vie  : {opponent.healthPoint.current} / {opponent.healthPoint.max}</p>
    </div>
  );
};

// == PropTypes
OpponentFrame.propTypes = {
  opponent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    healthPoint: PropTypes.shape({
      current: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

// == Export
export default OpponentFrame;
