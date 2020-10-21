// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  name,
  placeholder,
  onChange,
}) => {
  // == Handlers
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      name={name}
    />
  );
};

// == PropTypes

Field.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Field;
