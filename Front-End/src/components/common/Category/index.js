import React from 'react';
import PropTypes from 'prop-types';

import './category.scss';

const Category = ({
  name, color,
}) => (
  <p key={name} className={`category ${color}`}>{name}</p>
);

Category.propTypes = ({
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
});

Category.defaultProps = ({
  color: 'white',
});

export default Category;
