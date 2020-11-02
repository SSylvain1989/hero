// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

// == Import : local
import './notfound.scss';

// == Composant
const NotFound = () => (
  <>
    <div className="NotFound">
      <div className="NotFound__container">
        <div className="NotFound__content">
          <h1 className="NotFound__404">404</h1>
          <h2 className="NotFound__title">Il n'y a pas d'aventures par ici !</h2>
        </div>
        <Link to="/liste-des-jeux">
          <button type="button">
            Clique ici pour retrouver ton chemin
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

// == Export
export default NotFound;
