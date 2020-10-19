// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../common/Field';

// == Composant
const Signup = ({
  username,
  email,
  emailConfirm,
  password,
  passwordConfirm,
  changeField,
  handleSignup,
  message,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

  return (
    <div>
      <h1 className="signup__message">{message}</h1>
      <form className="signup" onSubmit={handleOnSubmit}>
        <h1 className="signup__title">Je souhaite devenir joueur</h1>
        <Field
          name="username"
          placeholder="Placeholder"
          onChange={changeField}
          value={username}
        />
        <Field
          name="email"
          placeholder="Placeholder"
          onChange={changeField}
          value={email}
        />
        <Field
          name="emailConfirm"
          placeholder="Placeholder"
          onChange={changeField}
          value={emailConfirm}
        />
        <Field
          name="password"
          placeholder="Placeholder"
          onChange={changeField}
          value={password}
        />
        <Field
          name="passwordConfirm"
          placeholder="Placeholder"
          onChange={changeField}
          value={passwordConfirm}
        />
        <input className="signup__submit" type="submit" value="C'est parti" />
      </form>
    </div>
  );
};

// == PropTypes
Signup.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  emailConfirm: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Signup.defaultProps = {
  message: '',
  username: '',
  email: '',
  emailConfirm: '',
  password: '',
  passwordConfirm: '',
};

// == Export
export default Signup;
