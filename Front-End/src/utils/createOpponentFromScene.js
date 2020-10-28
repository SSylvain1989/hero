const createOpponentFromScene = (scene) => {
  const opponent = {
    name: scene.opponent_name,
    attackPoint: scene.opponent_atk,
    defensePoint: scene.opponent_def,
    healthPoint: {
      current: scene.opponent_hp,
      max: scene.opponent_hp,
    },
    image: '',
  };

  return opponent;
};

export default createOpponentFromScene;
