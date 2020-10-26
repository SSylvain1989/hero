// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

import Field from '../../common/Field';

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
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };
  console.log(messagesError);

  if (!response) {
    return (
      <div className="signup">
        <form onSubmit={handleOnSubmit}>
          <h1 className="signup__title">Je souhaite devenir joueur</h1>
          <Field
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={changeField}
            value={username}
            type="text"
          />
          <Field
            name="email"
            placeholder="Adresse e-mail"
            onChange={changeField}
            value={email}
            type="email"
          />
          <Field
            name="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            type="password"
          />
          <Field
            name="passwordConfirm"
            placeholder="Confirmation mot de passe"
            onChange={changeField}
            value={passwordConfirm}
            type="password"
          />
          <input className="signup__submit" type="submit" value="C'est parti" />
          {messagesError.length > 0
            && messagesError.map((element) => (
              <p
                className="signup__error"
                key={Object.values(element)[0]}
              >Attention :
                {Object.values(element)[0]}
              </p>
            ))}
        </form>
      </div>
    );
  }

  // for (const message of messagesError) {
  //   console.log(message);
  // };

  return (
    <div className="signup">
      <div className="signup__signed">
        <h1 className="signup__text">Bonjour <span>{response.userName}</span> , Votre compte est créé - connectez-vous vite pour pouvoir jouer </h1>
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
  response: PropTypes.string,
});

Signup.defaultProps = ({
  messagesError: [],
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  response: '',
});

// == Export
export default Signup;
