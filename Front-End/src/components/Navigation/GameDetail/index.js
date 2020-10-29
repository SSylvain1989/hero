import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import CharacterList from './CharacterList';

import './gamedetail.scss';

const GameDetail = ({
  loadStory,
  gameId,
  isStoryLoaded,
  game,
  loadCharacterList,
  characterList,
  selectCharacter,
  playerSelected,
  firstSceneId,
}) => {
  useEffect(() => {
    loadCharacterList();
  }, []);

  useEffect(() => {
    // On ne charge la liste des personnages
    // Que quand l'histoire est chargée
    loadCharacterList();
  }, [isStoryLoaded]);

  const handleCharacterOnClick = (event) => {
    selectCharacter(event.currentTarget.id);
  };

  // console.log(playerSelected);

  return (
    <div className="game-detail">
      <div className="game-detail__container">
        <div className="game-detail__content">
          <h1 className="game-detail__title">{game.name}</h1>
          <section className="game-detail__section">{game.description}</section>
          <p>{game.difficulty}</p>
          <div>
            {!isStoryLoaded
              ? <button type="button" className="game-detail__button" onClick={loadStory(gameId)}>Choisir un héro</button>
              : (
                <>
                  <CharacterList
                      characterList={characterList}
                      handleCharacterOnClick={handleCharacterOnClick}
                  />
                  {playerSelected && <Link to={`/liste-des-jeux/${gameId}/${firstSceneId}`}><button type="button" className="game-detail__button">Jouer</button></Link>}
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = ({
  loadStory: PropTypes.func.isRequired,
  loadCharacterList: PropTypes.func.isRequired,
  characterList: PropTypes.array.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  playerSelected: PropTypes.bool.isRequired,
  gameId: PropTypes.number.isRequired,
  isStoryLoaded: PropTypes.bool.isRequired,
  game: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
  firstSceneId: PropTypes.string.isRequired,
});

export default GameDetail;
