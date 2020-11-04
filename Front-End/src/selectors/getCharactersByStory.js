const getCharactersByStory = (characterList, story) => {
  // Filtre la liste des personnages par rapport à l'histoire
  const characterListId = story.history.playable_character_id;
  const realCharacterList = characterList.filter(
    (character) => characterListId.includes(character.id),
  );
  return [...realCharacterList];
};

export default getCharactersByStory;
