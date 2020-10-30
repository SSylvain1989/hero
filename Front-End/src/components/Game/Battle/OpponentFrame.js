// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import HealthBar from '../HealthBar';

// == Import

// == Composant
const OpponentFrame = ({
  opponent,
}) => {
  console.log('opponent', opponent);

  // <HealthBar heathStatus={ opponent.healthPointent } />
  return (
    <>
      {opponent
      && (
        <div className="opponent-frame">
          <h1>{ opponent.name }</h1>
          <HealthBar
            current={opponent.healthPoint.current}
            max={opponent.healthPoint.max}
          />
        </div>
      )}
    </>
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
