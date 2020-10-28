import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import CharacterList from './CharacterList';

import './gamedetail.scss';

const GameDetail = ({
  fetchGameDetail,
  loadStory,
  gameId,
  isStoryLoaded,
  game,
  loadCharacterList,
  characterList,
  selectCharacter,
  playerSelected,
}) => {
  useEffect(() => {
    console.log(game);
    fetchGameDetail();
    loadCharacterList();
  }, []);

  const handleCharacterOnClick = (event) => {
    selectCharacter(event.currentTarget.id);
    console.log(characterList);
  };

  // console.log(playerSelected);

  return (
    <div className="game-detail">
      <div className="game-detail__container">
        <div className="game-detail__content">
          <h1 className="game-detail__title">{game.name}</h1>
          <p>Difficulté: {game.difficulty}</p>
          <img src="https://picsum.photos/id/237/80/80" alt="" />
          <div>
            {!isStoryLoaded
              ? <button type="button" className="game-detail__button" onClick={loadStory}>Choisir un héro</button>
              : (
                <>
                  <CharacterList
                      characterList={characterList}
                      handleCharacterOnClick={handleCharacterOnClick}
                  />
                  {playerSelected && <Link to={`/liste-des-jeux/${gameId}/1`}><button type="button" className="game-detail__button" onClick={loadStory}>Jouer</button></Link>}
                </>
              )}
          </div>
          <section className="game-detail__section">{game.description}</section>
        </div>
      </div>
    </div>
  );
};

GameDetail.propTypes = ({
  fetchGameDetail: PropTypes.func.isRequired,
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
});

export default GameDetail;
