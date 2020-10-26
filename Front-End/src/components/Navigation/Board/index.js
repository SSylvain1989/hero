// == Import : npm
import { Link } from 'react-router-dom';
// == Import : local
import React, { useEffect } from 'react';
import './styles.scss';

// == Composant
const Board = ({
  boardData,
  fetchDataBoard,
}) => {
  console.log('dataBoard dans le composant Board gamePlay', boardData.gamePlay);
  useEffect(() => {
    fetchDataBoard();
    console.log('dataBoard dans le composant Board gameWin,', boardData.gameWin);
  }, []);

  return (
    <>
      <div className="Board">
        <div className="Board__background">
          <div className="Board__container">
            <div className="Board__content">
              <img src="https://picsum.photos/id/237/80/80" alt="" />
              <h1>nom de l'avatar : {boardData.avatar} </h1>
              <h1 className="Board__title">Voici le tableau de tes scores soldat : {boardData.displayName}</h1>
              <p className="Board__p">Partie jouées</p>
              <p className="Board__Nb">{boardData.gamePlay}</p>
              <p className="Board__p">Victoires</p>
              <p className="Board__Nb">{boardData.gameWin}</p>
              <p className="Board__p">Défaites</p>
              <p className="Board__Nb">{boardData.gameOver}</p>
              <button type="button"><Link to="/liste-des-jeux">Clique ici pour voir la liste des différentes batailles que tu peux mener..</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// == Export
export default Board;
