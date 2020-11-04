// == Import : npm
import React from 'react';
import arene from 'src/images/old-book-6.JPG';
// import candle from 'src/images/backgroundhero.jpg';
import { Link } from 'react-router-dom';

// == Import : local
import './home.scss';

// == Composant
const Home = () => (
  <div className="Home">
    <img className="bg__site--01" src={arene} alt="candle" />
    <div className="Home__content">
      <h1 className="Home__title">Bienvenue visiteur !</h1>
      <h2>Description</h2>
      <p>Connaissez-vous les livres dont vous êtes le Héros ?</p>
      <p>Choose your own adventure</p>
      <h2>Le concept !</h2>
      <p>Le concept est très simple, plusieurs choix s’offrent à </p>
      <p>vous tout au long du jeu.</p>
      <p>Les décisions prises influencent grandement l’évolution </p>
      <p>de votre aventure et de votre héros.</p>
      <p>Ce sera à vous de découvrir les nombreuses directions et</p>
      <p>choix que peuvent prendre votre histoire... </p>
      <h2>Comment jouer ?</h2>
      <p>1. Choisir une des histoires proposées.</p>
      <p>2. Sélectionner le personnage que l'on veut incarner.</p>
      <p>3. C'est parti pour l'aventure !</p>
      <Link to="/liste-des-jeux">
        <button className="Home__button" type="button">
          Voir la liste des jeux
        </button>
      </Link>
    </div>
  </div>
);

// == Export
export default Home;
