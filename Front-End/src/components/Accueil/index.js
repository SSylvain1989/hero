// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.css';

// == Composant
const Accueil = ({ gameList }) => (
  <>
    <Header />
    <div className="Accueil">
      Je suis sur la page d'accueil
    </div>
    <Footer />
  </>
);


// == Export
export default Accueil;
