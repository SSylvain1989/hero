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
  isLoged,
  sessionUserName,
  messagesError,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  console.log('log connection component', messagesError);
  console.log('log connection component', messagesError);

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
          <p className="connection__redirect" type="button"><Link to="/inscription">Pas de compte ? <span>L'inscription c'est par ici</span></Link></p>
        </form>
      </div>
    );
  }
  return (
    <div className="connection__loged">
      <h1>Vous êtes bien connecté, bienvenue {sessionUserName} </h1>
      <button type="button" className="connection__redirect"><Link to="liste-des-jeux">Voir la liste des jeux</Link></button>
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
  messagesError: PropTypes.string.isRequired,
});

Connection.defaultProps = ({
  sessionUserName: '',
});

// == Export
export default Connection;
