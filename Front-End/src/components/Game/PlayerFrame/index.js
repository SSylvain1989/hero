// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import PlayerMenu from './PlayerMenu';

// == Composant
const PlayerFrame = ({ player }) => {
  const [playerMenu, setPlayerMenu] = useState(false);

  const togglePlayerMenu = () => {
    setPlayerMenu(!playerMenu);
  };

  return (
    <div className="player-frame">
      <div className="player-frame__click" onClick={togglePlayerMenu} />
      <PlayerMenu isToggled={playerMenu} {...player} />
    </div>
  );
};

// == PropTypes
PlayerFrame.propTypes = {
  player: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
export default PlayerFrame;
