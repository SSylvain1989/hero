// == Import : npm
import React from 'react';
import Footer from '../Footer';

// == Import : local
import './styles.scss';

// == Composant
const Accueil = () => (
  <>
    <div className="Home">
      <div className="Home__background">
        <button type="submit" className="Home__button">Liste des jeux</button>
      </div>
    </div>
    <Footer />
  </>
);

// == Export
export default Accueil;
