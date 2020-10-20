// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../common/Field';

// == Import scss
import './signup.scss';

import './signup.scss';

// == Composant
const Signup = ({
  username,
  email,
  emailConfirm,
  password,
  passwordConfirm,
  changeField,
  handleSignup,
  messages,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

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
          name="emailConfirm"
          placeholder="Confirmation e-mail"
          onChange={changeField}
          value={emailConfirm}
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
      </form>
    </div>
  );
};

// == PropTypes
Signup.propTypes = ({
  username: PropTypes.string,
  email: PropTypes.string,
  emailConfirm: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  messages: PropTypes.array,
});

Signup.defaultProps = ({
  messages: [],
  username: '',
  email: '',
  emailConfirm: '',
  password: '',
  passwordConfirm: '',
});

// == Export
export default Signup;
