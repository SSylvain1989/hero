// == Import : npm
import React from 'react';
import Footer from '../Footer';

// == Import : local
import './home.scss';

// == Composant
const Home = () => (
  <>
    <div className="Home">
      <div className="Home__background">
        <div className="Home__container">
          <div className="Home__content">
            <h1 className="Home__title">Bienvenue à toi Soldat ..!</h1>
            <button type="button">
              Clic ici pour voir la liste des différentes batailles que tu peux mener..
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

// == Export
export default Home;
