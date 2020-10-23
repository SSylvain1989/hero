// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../../common/Field';

// == Import scss
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
  messagesError,
  response,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

<<<<<<< HEAD
  // if (//Condition a trouver après le signup) {
=======
  // console.log('messageERROR du back :', messagesError);
  // console.log('reponseOK du back :', response);

  if (!response) {
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
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
<<<<<<< HEAD
        </form>
      </div>
    );
  // }
  // return (
  //   <div className="signup__signed">
  //     <h1>Votre compte a bien été crée </h1>
  //     <button type="button"><Link to="/connection">Connectez-vous</Link></button>
  //   </div>
  // );
=======
          {!messagesError === false && <p className="signup__error">Ce nom d'utilisateur est déjà existant , merci d'en choisir un autre</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="signup">
      <div className="signup__signed">
        <h1 className="signup__text">Bonjour <span>{response.userName}</span> , Votre compte est créé - connectez-vous vite pour pouvoir jouer </h1>
        <Link to="/connection"><button className="signup__button" type="button">Connectez-vous</button></Link>
      </div>
    </div>
  );
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
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
<<<<<<< HEAD
  messages: PropTypes.array,
=======
  messagesError: PropTypes.string,
  response: PropTypes.object,
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
  isLoged: PropTypes.bool.isRequired,
});

Signup.defaultProps = ({
  messagesError: '',
  username: '',
  email: '',
  emailConfirm: '',
  password: '',
  passwordConfirm: '',
  response: '',
});

// == Export
export default Signup;
