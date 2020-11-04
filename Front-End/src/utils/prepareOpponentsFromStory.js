const prepareOpponentsFromStory = (story) => {
  const sceneList = story.history.scene_list;
  const filteredSceneListByCombat = sceneList.filter((scene) => scene.details_scene.scene_type === 'Combat');
  const opponentList = [];
  filteredSceneListByCombat.forEach((scene) => {
    // Create opponent
    const opponent = {
      id: scene.details_scene.scene_opponent_id,
      name: scene.details_scene.opponent_name,
      attackPoint: scene.details_scene.opponent_atk,
      defensePoint: scene.details_scene.opponent_def,
      healthPoint: {
        current: scene.details_scene.opponent_hp,
        max: scene.details_scene.opponent_hp,
      },
      image: '',
      isAlive: true,
    };
    opponentList.push(opponent);
  });
  return opponentList;
};

export default prepareOpponentsFromStory;
