const getSceneById = (sceneId, sceneList) => sceneList.find(
  (scene) => scene.details_scene.scene_id === sceneId,
);

export default getSceneById;
