const getCharacterById = (characterId, characterList) => characterList.find(
  (character) => character.id.toString() === characterId,
);

export default getCharacterById;
