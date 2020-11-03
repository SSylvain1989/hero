// == Import : npm
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
          <p>Partie jouées</p>
          <span>{boardData.gamePlay}</span>
          <p>Victoires</p>
          <span>{boardData.gameWin}</span>
          <p>Défaites</p>
          <span>{boardData.gameOver}</span>
          <Link to="/liste-des-jeux"><button className="Board__button" type="button">Retour à la liste des jeux..</button></Link>
        </div>
      </div>
    </>
  );
};

Board.propTypes = ({
  boardData: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    gameOver: PropTypes.number.isRequired,
    gamePlay: PropTypes.number.isRequired,
    gameWin: PropTypes.number.isRequired,
  }).isRequired,
  fetchDataBoard: PropTypes.func.isRequired,
});

// == Export
export default Board;
