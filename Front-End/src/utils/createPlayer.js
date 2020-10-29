const createPlayer = (chosenCharacter) => {
  const player = {
    id: chosenCharacter.id,
    name: chosenCharacter.name,
    attackPoint: chosenCharacter.atk,
    defensePoint: chosenCharacter.def,
    healthPoint: {
      current: chosenCharacter.hp,
      max: chosenCharacter.hp,
    },
    image: '',
    inventory: {},
  };

  return player;
};

export default createPlayer;
