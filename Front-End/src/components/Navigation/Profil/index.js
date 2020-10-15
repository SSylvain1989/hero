import React from 'react';

import './profil.scss';

const Profil = () => (
  <div className="profil">
    <h1>VOS INFORMATIONS</h1>
    <div className="profil__input">
      <h2>Modifier mon email</h2>
      <input type="text" placeholder="Nouvel email" />
      <input type="text" placeholder="Confirmer le nouvel email" />
      <button type="button">Valider</button>
      <h2>Modifier mon nom d'utilisateur</h2>
      <input type="text" placeholder="Nouveau pseudo" />
      <input type="text" placeholder="Confirmer le nouveau pseudo" />
      <button type="button">Valider</button>
      <h2>Modifier mon mot de passe</h2>
      <input type="text" placeholder="Ancien mot de passe" />
      <input type="text" placeholder="Nouveau mot de passe" />
      <input type="text" placeholder="Confirmation mot de passe" />
      <button type="button">Valider</button>
      <div className="profil__input--delete">
        <h2>Supprimer mon compte</h2>
        <button type="button">Supprimer mon compte</button>
      </div>
    </div>
  </div>
);

export default Profil;
