import React from 'react';
import PropTypes from 'prop-types';

import './category.scss';

const Category = ({
  name,
}) => (
  <p key={name} className={`category ${name}`}>{name}</p>
);

Category.propTypes = ({
  name: PropTypes.string.isRequired,
});

export default Category;
