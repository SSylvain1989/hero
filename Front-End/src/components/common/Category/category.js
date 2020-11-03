import React from 'react';
import PropTypes from 'prop-types';

const Category = ({
  name, color,
}) => (
  <div className="game">
    <div className="game__card">
      <img className="game__image" src={img} alt="imgGames" />
      <div className="game__card--text">
        <h2 className="game__card__name">{name}</h2>
        <p className="game__card__difficulty">{difficulty}</p>
        {categories.map((category) => (
          <p key={category.name} className={`category ${category.color}`}>{category.name}</p>
        ))}
        <p className="game__card__description">{description}</p>
      </div>
      <Link to={`/liste-des-jeux/${id}`}><button type="button" className="game__card--button">Voir les détails</button></Link>
    </div>
  </div>
);

Category.propTypes = ({
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
});

Category.defaultProps = ({
  color: 'white',
}),

export default Category;
