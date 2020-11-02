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
        <div className="Board__container">
          <img className="Board__image" src="https://i.ibb.co/ZXpv3t3/minotaur.gif" alt="" />
          <h1 className="Board__title">Voici le tableau de tes scores {boardData.displayName}</h1>
          <p className="Board__p">Partie jouées</p>
          <p className="Board__Nb">{boardData.gamePlay}</p>
          <p className="Board__p">Victoires</p>
          <p className="Board__Nb">{boardData.gameWin}</p>
          <p className="Board__p">Défaites</p>
          <p className="Board__Nb">{boardData.gameOver}</p>
          <button className="Board__button" type="button"><Link to="/liste-des-jeux">Retour à la liste des jeux..</Link></button>
        </div>
      </div>
    </>
  );
};

// == Export
export default Board;
