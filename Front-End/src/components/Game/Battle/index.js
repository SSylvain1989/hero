import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import startMinautor from '../../../images/start-minautor.gif';

import './battle.scss';

const Battle = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;
    const nextScene = scene.next_scene_id;
    const nextScene2 = scene.next_scene_id2;
    const nextSceneURL = `/liste-des-jeux/${storyId}/${nextScene}`;
    const nextScene2URL = `/liste-des-jeux/${storyId}/${nextScene2}`;

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
          {nextScene && <Link to={nextSceneURL}><button className="battle-element__scene-attack" type="button">Attaquer</button></Link>}
          {nextScene2 && <Link to={nextScene2URL}><button className="battle-element__scene-defense" type="button">Defendre</button></Link>}
        </div>
      </div>
    );
  }
  return (
    <Redirect to="/" exact />
  );
};

Battle.propTypes = ({
  scene: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
});

export default Battle;
