import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

const CharacterList = ({ characterList, handleCharacterOnClick }) => (
  <>
    {(characterList.length > 0)
      ? characterList.map((character) => (
        <div className="character-list">
          <Character
            key={character.id}
            {...character}
            onClick={handleCharacterOnClick}
          />
        </div>

      )) : null}
  </>
);

CharacterList.propTypes = ({
  characterList: PropTypes.array.isRequired,
  handleCharacterOnClick: PropTypes.func.isRequired,
});

export default CharacterList;
