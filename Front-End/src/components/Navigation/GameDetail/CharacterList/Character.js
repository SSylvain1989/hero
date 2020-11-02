import React from 'react';
import PropTypes from 'prop-types';

import './character.scss';

const Character = ({
<<<<<<< HEAD
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
=======
  id, name, hp, atk, def, onClick, image,
}) => {
  console.log(image);

  return (
  // <div className="character-list">
    <div className="character" id={id} onClick={onClick}>
      <img className="character__heroes" src={image} alt={name} />
      <h1 className="character__name">{name}</h1>
      <h2 className="character__text">Points de vie</h2>
      <p className="character__stats">{hp}</p>
      <h2 className="character__text">Attaque</h2>
      <p className="character__stats">{atk}</p>
      <h2 className="character__text">Défense</h2>
      <p className="character__stats">{def}</p>
    </div>
  // </div>
  );
};
>>>>>>> eeaa07ab3fa51eaad442815c2c681827496e1fcf

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
<<<<<<< HEAD
  activeId: PropTypes.string.isRequired,
=======
>>>>>>> eeaa07ab3fa51eaad442815c2c681827496e1fcf
};

export default Character;
