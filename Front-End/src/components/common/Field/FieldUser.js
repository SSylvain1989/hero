// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  name,
  type,
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
      type={type}
    />
  );
};

// == PropTypes

Field.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

// == Export
export default Field;
