import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

const CharacterList = ({ characterList, handleCharacterOnClick }) => {
  const [activeId, setActiveId] = useState('');

  const onClickHandler = (event) => {
    handleCharacterOnClick(event);
    setActiveId(event.currentTarget.id);
  };
  return (
    <>
      {(characterList.length > 0)
        ? characterList.map((character) => (
          <div key={character.id} className="character-list">
            <Character
              key={character.id}
              {...character}
              activeId={activeId}
              onClick={onClickHandler}
            />
          </div>

        )) : null}
    </>
  );
};

CharacterList.propTypes = ({
  characterList: PropTypes.array.isRequired,
  handleCharacterOnClick: PropTypes.func.isRequired,
});

export default CharacterList;
