import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from '../../common/Field/FieldUser';

import './profile.scss';

const Profile = ({
  email,
  userName,
  password,
  passwordConfirm,
  onChange,
  handleEmailSubmit,
  handleUsernameSubmit,
  handlePasswordSubmit,
  handleAccountDeletion,
  showModal,
  showModalToggle,
  message,
  displayMessage,
  displayMessageToggle,
}) => {
  useEffect(() => {
    displayMessageToggle();
    setTimeout(() => displayMessageToggle(), 3000);
  }, [message]);
  return (
    <div className="profile">
      <div className="profile__input">
        <h1>VOS INFORMATIONS</h1>
        <h2>Modifier mon email</h2>
        <Field
          name="email"
          placeholder="Nouvel email"
          onChange={onChange}
          value={email}
          type="text"
        />
        <button type="button" onClick={handleEmailSubmit}>Valider</button>
        <h2>Modifier mon nom d'utilisateur</h2>
        <Field
          name="userName"
          placeholder="Nouveau pseudo"
          onChange={onChange}
          value={userName}
          type="text"
        />
        <button type="button" onClick={handleUsernameSubmit}>Valider</button>
        <h2>Modifier mon mot de passe</h2>
        <Field
          name="password"
          placeholder="Nouveau mot de passe"
          onChange={onChange}
          value={password}
          type="password"
        />
        <Field
          name="passwordConfirm"
          placeholder="Confirmer le nouveau mot de passe"
          onChange={onChange}
          value={passwordConfirm}
          type="password"
        />
        <button type="button" onClick={handlePasswordSubmit}>Valider</button>
        <div className="profile__input--delete">
          <h2>Supprimer mon compte</h2>
          <button type="button" onClick={() => showModalToggle(showModal)}>Supprimer mon compte</button>
          <div className={showModal ? 'profile__delete-modal' : 'profile__delete-modal--hide'}>
            <h1>Êtes-vous sur de vouloir supprimer votre compte</h1>
            <button type="button" onClick={handleAccountDeletion}>Supprimer mon compte definitivement</button>
            <button type="button" onClick={() => showModalToggle(showModal)}>Retour</button>
          </div>
        </div>
      </div>
      <div className={displayMessage ? 'profile__confirmation' : 'profile__confirmation--hiden'}>
        <p>{Object.values(message)[0]}</p>
      </div>
    </div>
  );
};

Profile.propTypes = ({
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleEmailSubmit: PropTypes.func.isRequired,
  handleUsernameSubmit: PropTypes.func.isRequired,
  handlePasswordSubmit: PropTypes.func.isRequired,
  handleAccountDeletion: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  showModalToggle: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  displayMessage: PropTypes.bool.isRequired,
  displayMessageToggle: PropTypes.func.isRequired,
});

export default Profile;
