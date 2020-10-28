const prepareOpponentsFromStory = (story) => {
  console.log('In prepareOpponentsFromStory with', story);
  const sceneList = story.history.scene_list;
  const filteredSceneListByCombat = sceneList.filter((scene) => scene.details_scene.scene_type === 'Combat');
  console.log('filteredSceneListByCombat', filteredSceneListByCombat);
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
  console.log(opponentList);
  return opponentList;
};

export default prepareOpponentsFromStory;
