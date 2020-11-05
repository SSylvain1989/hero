// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';
import Field from '../../common/Field/FieldUser';

// == Import scss
import './signup.scss';

// == Composant
const Signup = ({
  username,
  email,
  password,
  passwordConfirm,
  changeField,
  handleSignup,
  messagesError,
  response,
  resetFields,
  signupError,
  signupResponse,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

  useEffect(() => {
    resetFields();
    signupError([]);
    signupResponse({});
  }, []);

  if (!response.id) {
    return (
      <div className="signup">
        <form onSubmit={handleOnSubmit}>
          <img className="signup__picture" src={logo} alt="logo" />
          <h1 className="signup__title">Je souhaite devenir joueur</h1>
          <Field
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={changeField}
            value={username}
            type="text"
            className="signup__input"
          />
          <Field
            name="email"
            placeholder="Adresse e-mail"
            onChange={changeField}
            value={email}
            type="email"
            className="signup__input"
          />
          <Field
            name="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            type="password"
            className="signup__input"
          />
          <Field
            name="passwordConfirm"
            placeholder="Confirmation mot de passe"
            onChange={changeField}
            value={passwordConfirm}
            type="password"
            className="signup__input"
          />
          <button className="signup__button" type="submit" value="C'est parti">Confirmer </button>
          {messagesError.length > 0
            && messagesError.map((element) => (
              <p
                className="signup__error"
                key={Object.values(element)[0]}
              >
                {Object.values(element)[0]}
              </p>
            ))}
        </form>
      </div>
    );
  }

  return (
    <div className="signup">
      <div className="signup__signed">
        <h1>
          Bonjour <span>{response.userName}</span>,<br />
          Votre compte a bien été créé, connectez-vous vite pour pouvoir jouer
        </h1>
        <Link to="/connection"><button className="signup__button" type="button">Connectez-vous</button></Link>
      </div>
    </div>
  );
};

// == PropTypes
Signup.propTypes = ({
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  messagesError: PropTypes.array,
  response: PropTypes.object,
  resetFields: PropTypes.func.isRequired,
  signupError: PropTypes.func.isRequired,
  signupResponse: PropTypes.func.isRequired,
});

Signup.defaultProps = ({
  messagesError: [],
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  response: {},
});

// == Export
export default Signup;
