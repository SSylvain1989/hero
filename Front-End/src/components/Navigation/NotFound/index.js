// == Import : npm
import React from 'react';
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
            <h1 className="NotFound__title">Oups.. il n'y a pas de batailles à mener pour toi ici ...!</h1>
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
export default NotFound;