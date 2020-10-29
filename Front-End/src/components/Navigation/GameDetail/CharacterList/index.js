import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

const CharacterList = ({ characterList, handleCharacterOnClick }) => (
  <div className="character-list">
    {characterList.length > 0
      && characterList.map((character) => (
        <Character
          id={character.id}
          key={character.id}
          {...character}
          onClick={handleCharacterOnClick}
          selected="selected"
        />
      ))}
  </div>
);

CharacterList.propTypes = ({
  characterList: PropTypes.array.isRequired,
  handleCharacterOnClick: PropTypes.func.isRequired,
});

export default CharacterList;
