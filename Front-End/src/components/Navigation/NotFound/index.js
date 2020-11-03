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
      <div className="NotFound__background">
        <div className="NotFound__container">
          <div className="NotFound__content">
            <h1>404</h1>
            <h2>
              Pas d'aventure ici, pars vite malheureux
            </h2>
            <Link to="/liste-des-jeux">
              <button className="NotFound__button" type="button">
                Clique ici pour retrouver ton chemin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

// == Export
export default NotFound;
