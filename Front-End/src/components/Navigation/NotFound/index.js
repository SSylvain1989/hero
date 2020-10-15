// == Import : npm
import React from 'react';
import Footer from '../Footer';

// == Import : local
import './styles.scss';

// == Composant
const NotFound = () => (
  <>
    <div className="NotFound">
      <div className="NotFound__background">
        <div className="NotFound__container">
          <div className="NotFound__content">
            <h1 className="NotFound__title">Oups.. il n'y a pas de batailles à mener pour toi ici ...!</h1>
            <a href="#" className="NotFound__button">Clic ici pour voir la liste des différentes batailles que tu peux mener..</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

// == Export
export default NotFound;
