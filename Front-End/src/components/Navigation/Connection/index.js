// == Import npm
import React from 'react';

// == Import
import Field from './Field';

// == Import scss
import './connection.scss';

// == Composant
const Connection = () => (
  <>
    <form className="connection">
      <h1 className="connection-title">Je suis déjà joueur</h1>
      <Field />
      <Field />
      <input className="connection-submit" type="submit" value="C'est parti" />
      <button className="connection-redirect" type="button">L'inscription c'est par ici</button>
    </form>
  </>
);

// == Export
export default Connection;
