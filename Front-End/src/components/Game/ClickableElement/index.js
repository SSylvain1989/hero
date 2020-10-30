import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerFrame from 'src/containers/PlayerFrame';
import getSceneById from 'src/selectors/getSceneById';

import './clickableElement.scss';

// composant avec deux choix vieillard ou porte
const clickableElement = ({ scene, storyId, image, game }) => {
  if (scene !== undefined) {
    // TOUT CE QUI SE TROUVE EN DESSOUS EST SALE
    // MAIS CA MARCHE
    let nextSceneOpponentIsAlive = true;
    if (scene.next_scene) {
      const fullNextScene = getSceneById(
        scene.next_scene.next_scene_id, game.story.history.scene_list,
      );
      if (fullNextScene.details_scene.scene_opponent_id) {
        const nextSceneOpponentId = scene.details_scene.scene_opponent_id;
        const opponent = game.opponentList.find((who) => who.id === nextSceneOpponentId);
        if (opponent) {
          nextSceneOpponentIsAlive = opponent.isAlive;
        }
      }
    }
    let nextSceneOpponentIsAlive2 = true;
    if (scene.next_scene2) {
      const fullNextScene = getSceneById(
        scene.next_scene2.next_scene_id2, game.story.history.scene_list,
      );
      if (fullNextScene.details_scene.scene_opponent_id) {
        const nextSceneOpponentId = scene.details_scene.scene_opponent_id;
        const opponent = game.opponentList.find((who) => who.id === nextSceneOpponentId);
        if (opponent) {
          nextSceneOpponentIsAlive2 = opponent.isAlive;
        }
      }
    }
    // MAIS CA MARCHE
    // TOUT CE QUI SE TROUVE AU DESSUS EST SALE

    return (
      <div className="clickable-element">
        <div className="clickable-element__scene">
          {scene.next_scene.img_element
          && nextSceneOpponentIsAlive
          && (
          <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`}>
            <img
              className="clickable-element__scene--clickable1"
              src={scene.next_scene.img_element}
              alt="element-cliquable1"
            />
          </Link>
          )}
          {scene.next_scene2
          && nextSceneOpponentIsAlive2
          && (
          <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`}>
            <img
              className="clickable-element__scene--clickable2"
              src={scene.next_scene2.img_element}
              alt="element-cliquable2"
            />
          </Link>
          )}
          <div className="clickable-element__scene--image-container">
            <img
              src={image}
              alt="player-info"
            />
          </div>
          <PlayerFrame />
        </div>
        <div className="clickable-element__image-background">
          <img
            src={`${scene.img_scene}`}
            alt="background"
          />
        </div>
      </div>
    );
  }
  return (
    <Redirect to="/" exact />
  );
};

clickableElement.propTypes = ({
  scene: PropTypes.shape({
    details_scene: PropTypes.shape({
      scene_id: PropTypes.number,
      scene_name: PropTypes.string,
      scene_description: PropTypes.string,
      scene_type: PropTypes.string,
    }).isRequired,
    previous_scene_id: PropTypes.number.isRequired,
    next_scene: PropTypes.shape({
      next_scene_id: PropTypes.number,
      next_scene_name: PropTypes.string,
    }),
    next_scene2: PropTypes.shape({
      next_scene_id2: PropTypes.number,
      next_scene_name2: PropTypes.string,
    }),
  }).isRequired,
  storyId: PropTypes.number.isRequired,
});

export default clickableElement;
