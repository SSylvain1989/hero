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
            <h1 className="NotFound__title">Oups.. 404 ..tout le monde est déjà mort ici  ...!</h1>
            <h1 className="NotFound__title">Tu peux retourner à la liste des jeux si tu ne souhaites pas rester avec les morts..</h1>
            <Link to="/liste-des-jeux">
              <button className="NotFound__button" type="button">
                Liste des jeux
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
