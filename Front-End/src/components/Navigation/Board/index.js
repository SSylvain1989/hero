// == Import : npm
import React from 'react';
import Footer from '../Footer';

// == Import : local
import './styles.scss';

// == Composant
const Board = ({ }) => (
  <>
    <div className="Board">
      <div className="Board__background">
        <div className="Board__container">
          <div className="Board__content">
            <img src="https://picsum.photos/id/237/80/80" alt="" />
            <h1 className="Board__title">Voici le tableau de tes scores soldat "pseudo"..!</h1>
            <p className="Board__p">Partie jouées</p>
            <p className="Board__Nb">5</p>
            <p className="Board__p">Victoires</p>
            <p className="Board__Nb">3</p>
            <p className="Board__p">Défaites</p>
            <p className="Board__Nb">2</p>
            <a href="#" className="Board__button">Clic ici pour voir la liste des différentes batailles que tu peux mener..</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

// == Export
export default Board;
