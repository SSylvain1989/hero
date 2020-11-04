// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import HealthBar from '../HealthBar';

// == Import

// == Composant
const OpponentFrame = ({
  opponent,
}) => (
    <>
      {opponent
        && (
          <div className="opponent-frame">
            <div className="opponent-frame__header"> <h1>{opponent.name}</h1>
            </div>
            <div className="opponent-frame__stat">
              <HealthBar
                current={opponent.healthPoint.current}
                max={opponent.healthPoint.max}
              />
            </div>
          </div>
        )}
    </>
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
