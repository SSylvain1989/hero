import React from 'react';
import PropTypes from 'prop-types';

import './character.scss';

const Character = ({
  id, image, name, hp, atk, def, onClick,
}) => (
  <div className="character__card" id={id} onClick={onClick}>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <p>Points de vie : {hp}</p>
    <p>Attaque : {atk}</p>
    <p>Defense : {def}</p>
  </div>
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Character;
