import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import startMinautor from '../../../images/start-minautor.gif';

import './battle.scss';

const Battle = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;

    return (
      <div className="battle-element">
        <div className="battle-element__scene">
          <h1>{description}</h1>
          <div className="battle-element__scene--image-container">
            <img
              src={startMinautor}
              alt="Fiche personnage"
            />
          </div>
          {scene.next_scene && <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`}><button className="battle-element__scene-attack" type="button">{scene.next_scene.next_scene_name}</button></Link>}
          {scene.next_scene2 && <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`}><button className="battle-element__scene-defense" type="button">{scene.next_scene2.next_scene_name2}</button></Link>}
        </div>
      </div>
    );
  }
  return (
    <Redirect to="/" exact />
  );
};

Battle.propTypes = ({
  scene: PropTypes.shape({
    details_scene: PropTypes.shape({
      scene_id: PropTypes.number,
      scene_name: PropTypes.string,
      scene_description: PropTypes.string,
      scene_type: PropTypes.string,
      opponent_name: PropTypes.string,
      opponent_hp: PropTypes.number,
      opponent_atk: PropTypes.number,
      opponent_def: PropTypes.number,
    }).isRequired,
    previous_scene_id: PropTypes.number.isRequired,
    next_scene: PropTypes.shape({
      next_scene_id: PropTypes.number.isRequired,
      next_scene_name: PropTypes.string.isRequired,
    }).isRequired,
    next_scene2: PropTypes.shape({
      next_scene_id2: PropTypes.number,
      next_scene_name2: PropTypes.string,
    }),
  }).isRequired,
  storyId: PropTypes.number.isRequired,
});

export default Battle;
