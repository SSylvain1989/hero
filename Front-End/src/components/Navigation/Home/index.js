// == Import : npm
import React from 'react';
import backgroundhero from 'src/images/backgroundhero.jpg';
import { Link } from 'react-router-dom';

// == Import : local
import './home.scss';

// == Composant
const Home = () => (
  <div className="Home">
    <img className="bg__site--01" src={backgroundhero} alt="backgroundHero" />
    <div className="Home__content">
      <h1 className="Home__title">Bienvenue à toi, <br></br> très cher visiteur !</h1>
      <p className="Home__description">Description</p>
      <Link to="/liste-des-jeux" exact>
        <button className="Home__button" type="button">
          Voir la liste des jeux
        </button>
      </Link>
    </div>
  </div>
);

// == Export
export default Home;
