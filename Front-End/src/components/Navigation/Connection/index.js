// == Import npm
import React, { useEffect } from 'react';
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
  isLoged,
  sessionUserName,
  messagesError,
  resetFields,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    resetFields();
  }, []);

  if (!isLoged) {
    return (
      <div className="connection">
        <form className="connection__form" onSubmit={handleSubmit}>
          <h1 className="connection__title">CONNEXION</h1>
          <Field
            name="userName"
            placeholder="Username"
            onChange={onChange}
            value={userName}
            type="text"
            className="connection__input"
          />
          <Field
            name="password"
            placeholder="Mot de passe"
            onChange={onChange}
            value={password}
            type="password"
            className="connection__input"
          />
          {messagesError.length > 0
            && messagesError.map((element) => (
              <p
                className="connection__error"
                key={Object.values(element)[0]}
              >
                {Object.values(element)[0]}
              </p>
            ))}
          <button className="connection__button" type="submit">Se connecter</button>
          <Link to="/inscription"><p className="connection__redirect" type="button">Pas de compte ? <br></br> <span>L'inscription se fait par ici !</span></p></Link>
        </form>
      </div>
    );
  }
  return (
    <div className="connection__loged">
      <h1>Vous êtes bien connecté, <br /> bienvenue à bord {sessionUserName} ! </h1>
      <button type="button"><Link to="liste-des-jeux">Voir la liste des jeux</Link></button>
    </div>
  );
};

Connection.propTypes = ({
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoged: PropTypes.bool.isRequired,
  sessionUserName: PropTypes.string,
  messagesError: PropTypes.array.isRequired,
  resetFields: PropTypes.func.isRequired,
});

Connection.defaultProps = ({
  sessionUserName: '',
});

// == Export
export default Connection;
