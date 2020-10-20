// == Import : npm
import React from 'react';
import backgroundhero from 'src/images/backgroundhero.jpg';

// == Import : local
import './home.scss';

// == Composant
const Home = () => (
  <>
    <div className="Home">
      <img className="Home__img" src={backgroundhero} alt="backgroundHero" />
      <div className="Home__container">
        <div className="Home__content">
          <h1 className="Home__title">Bienvenue à toi Soldat ..!</h1>
          <button type="button">
            Clic ici pour voir la liste des différentes batailles que tu peux mener..
            </button>
        </div>
      </div>
    </div>
  </>
);

// == Export
export default Home;
