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
  useEffect(() => {
    fetchDataBoard();
  }, []);

  return (
    <>
      <div className="Board">
        <div className="Board__container">
          <img className="Board__image" src="https://i.ibb.co/ZXpv3t3/minotaur.gif" alt="" />
          <h1 className="Board__title">Voici le tableau de tes scores</h1>
          <p>Parties jouées</p>
          <span>{boardData.gamePlay}</span>
          <p>Victoires</p>
          <span>{boardData.gameWin}</span>
          <p>Défaites</p>
          <span>{boardData.gameOver}</span>
          <Link to="/liste-des-jeux"><button className="Board__button" type="button">Retour à la liste des jeux</button></Link>
        </div>
      </div>
    </>
  );
};

Board.propTypes = ({
  boardData: PropTypes.shape({
    gameOver: PropTypes.number,
    gamePlay: PropTypes.number,
    gameWin: PropTypes.number,
  }),
  fetchDataBoard: PropTypes.func.isRequired,
});
Board.defaultProps = ({
  boardData: PropTypes.shape({
    gameOver: 0,
    gamePlay: 0,
    gameWin: 0,
  }),
});

// == Export
export default Board;
