// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

// == Composant
const OpponentFrame = ({
  opponent,
}) => (
  <div className="opponent-frame">
    <div className="opponent-frame">
      <h1>{ opponent.name }</h1>
    </div>
    <div className="opponent-frame">
      <p>health  : { opponent.healthPoint.current } / { opponent.healthPoint.max }</p>
    </div>
  </div>
);

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
