// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import testImage from 'src/images/start-minautor.gif';
import PlayerMenu from './PlayerMenu';

// == Composant
const PlayerFrame = ({ player }) => {
  const [playerMenu, setPlayerMenu] = useState(false);

  const togglePlayerMenu = () => {
    setPlayerMenu(!playerMenu);
  };

  return (
    <>
      <img
        src={testImage}
        alt={player.name}
        onClick={togglePlayerMenu}
      />
      <PlayerMenu isToggled={playerMenu} {...player} />
    </>
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
