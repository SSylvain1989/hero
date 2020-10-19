import React from 'react';
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
}) => (
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
      <button type="button" onSubmit={handleEmailSubmit}>Valider</button>
      <h2>Modifier mon nom d'utilisateur</h2>
      <Field
        name="userName"
        placeholder="Nouveau pseudo"
        onChange={onChange}
        value={userName}
        type="text"
      />
      <button type="button" onSubmit={handleUsernameSubmit}>Valider</button>
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
      <button type="button" onSubmit={handlePasswordSubmit}>Valider</button>
      <div className="profile__input--delete">
        <h2>Supprimer mon compte</h2>
        <button type="button">Supprimer mon compte</button>
        <div className="profile__delete-modal">
          <h1>Êtes-vous sur de vouloir supprimer votre compte</h1>
          <input type="text" placeholder="Taper votre pseudo pour confirmer la suppression" />
          <button type="button">Supprimer mon compte</button>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = ({
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleEmailSubmit: PropTypes.func.isRequired,
  handleUsernameSubmit: PropTypes.func.isRequired,
  handlePasswordSubmit: PropTypes.func.isRequired,
});

export default Profile;
