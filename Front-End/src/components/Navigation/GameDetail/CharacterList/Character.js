import React from 'react';
import PropTypes from 'prop-types';

import './character.scss';

const Character = ({
  id, name, hp, atk, def, onClick, image, activeId,
}) => (
  <div className={`${id == activeId.toString() ? 'character character--active' : 'character'}`} id={id} onClick={onClick}>
    <img className="character__heroes" src={image} alt={name} />
    <h1 className="character__name">{name}</h1>
    <h2 className="character__text">Points de vie</h2>
    <p className="character__stats">{hp}</p>
    <h2 className="character__text">Attaque</h2>
    <p className="character__stats">{atk}</p>
    <h2 className="character__text">Défense</h2>
    <p className="character__stats">{def}</p>
  </div>
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  activeId: PropTypes.string.isRequired,
};

export default Character;
