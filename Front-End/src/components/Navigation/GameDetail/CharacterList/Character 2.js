import React from 'react';
import PropTypes from 'prop-types';

import './character.scss';
import minotaur from 'src/images/start-minautor.gif';
import wraith from 'src/images/wraith.gif';

const Character = ({
  id, name, hp, atk, def, onClick,
}) => {
  let characterImage = null;
  switch (name) {
    case 'Minotaur':
      characterImage = minotaur;
      break;
    case 'Wraith':
      characterImage = wraith;
      break;
    default:
      break;
  }

  return (
    <div className="character__card" id={id} onClick={onClick}>
      <img src={characterImage} alt={name} />
      <h1>{name}</h1>
      <h2>Points de vie</h2>
      <p>{hp}</p>
      <h2>Attaque</h2>
      <p>{atk}</p>
      <h2>Défense</h2>
      <p>{def}</p>
    </div>
  );
};

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Character;
