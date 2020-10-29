// == Import : npm
import React from 'react';
import backgroundhero from 'src/images/backgroundhero.jpg';
import { NavLink } from 'react-router-dom';

// == Import : local
import './home.scss';

// == Composant
const Home = () => (
  <div className="Home">
    <img className="bg__site" src={backgroundhero} alt="backgroundHero" />
    <div className="Home__content">
      <h1 className="Home__title">Bienvenue à toi Soldat !</h1>
      <p className="Home__description">Description</p>
      <button className="Home__button" type="button">
        <NavLink
          to="/liste-des-jeux"
          exact
        >
          Voir la liste des jeux
        </NavLink>
      </button>
    </div>
  </div>
);

// == Export
export default Home;
