// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import Field from '../../common/Field/FieldUser';

// == Import scss
import './connection.scss';

// == Composant
const Connection = ({
  userName,
  password,
  onChange,
  onSubmit,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <>
      <form className="connection" onSubmit={handleSubmit}>
        <h1 className="connection__title">CONNEXION</h1>
        <Field
          name="userName"
          placeholder="Username"
          onChange={onChange}
          value={userName}
          type="text"
        />
        <Field
          name="password"
          placeholder="Mot de passe"
          onChange={onChange}
          value={password}
          type="password"
        />
        <button type="submit">Se connecter</button>
        <button className="connection__redirect" type="button"><Link to="/inscription">L'inscription c'est par ici</Link></button>
      </form>
    </>
  );
};

Connection.propTypes = ({
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
});

// == Export
export default Connection;
