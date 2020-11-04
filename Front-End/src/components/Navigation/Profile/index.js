import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  resetFields,
  errorMessage,
  addProfileErrorMessage,
  saveMessage,
  currentEmail,
  currentUserName,
}) => {
  useEffect(() => {
    displayMessageToggle();
    setTimeout(() => displayMessageToggle(), 3000);
  }, [message]);

  useEffect(() => () => {
    resetFields();
    addProfileErrorMessage([]);
    saveMessage([{ toto: '' }]);
  }, []);
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__input">
          <h1>VOS INFORMATIONS</h1>
          {errorMessage.length > 0
            && errorMessage.map((element) => (
              <p
                className="signup__error"
                key={Object.values(element)[0]}
              >
                {Object.values(element)[0]}
              </p>
            ))}
          <h2>Modifier mon email</h2>
          <h3>Votre email actuel: {currentEmail}</h3>
          <Field
            name="email"
            placeholder="Nouvel email"
            onChange={onChange}
            value={email}
            type="text"
            className="profile__field"
          />
          <button className="profile__btn" type="button" onClick={handleEmailSubmit}>Valider</button>
          <h2>Modifier mon nom d'utilisateur</h2>
          <h3>Votre nom d'utilisateur actuel: {currentUserName}</h3>
          <Field
            name="userName"
            placeholder="Nouveau nom d'utilisateur"
            onChange={onChange}
            value={userName}
            type="text"
            className="profile__field"
          />
          <button className="profile__btn" type="button" onClick={handleUsernameSubmit}>Valider</button>
          <h2>Modifier mon mot de passe</h2>
          <Field
            name="password"
            placeholder="Nouveau mot de passe"
            onChange={onChange}
            value={password}
            type="password"
            className="profile__field"
          />
          <Field
            name="passwordConfirm"
            placeholder="Confirmer le nouveau mot de passe"
            onChange={onChange}
            value={passwordConfirm}
            type="password"
            className="profile__field"
          />
          <button className="profile__btn" type="button" onClick={handlePasswordSubmit}>Valider</button>
          <div className="profile__input--delete">
            <button className="profile__deleteBtn" type="button" onClick={() => showModalToggle(showModal)}>Supprimer mon compte</button>
            {/* Modal pour la suppression du compte */}
            <div className={showModal ? 'profile__delete-modal' : 'profile__delete-modal--hide'}>
              <h1 className="profile__delete-title">Êtes-vous sur de vouloir supprimer votre compte</h1>
              <Link to="/"><button type="button" onClick={handleAccountDeletion} className="profile__delete-btn">Supprimer mon compte definitivement</button></Link>
              <button className="profile__delete-back" type="button" onClick={() => showModalToggle(showModal)}>Retour</button>
            </div>
          </div>
        </div>
      </div>
      <div className={(displayMessage && Object.values(message)[0] !== '') ? 'profile__confirmation' : 'profile__confirmation--hiden'}>
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
  resetFields: PropTypes.func.isRequired,
  errorMessage: PropTypes.array.isRequired,
  addProfileErrorMessage: PropTypes.func.isRequired,
  saveMessage: PropTypes.func.isRequired,
  currentEmail: PropTypes.string.isRequired,
  currentUserName: PropTypes.string.isRequired,
});

export default Profile;
