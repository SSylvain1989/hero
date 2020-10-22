import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './clickableElement.scss';

const clickableElement = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;
    const nextScene = scene.next_scene_id;
    const nextScene2 = scene.next_scene_id2;
    const nextSceneURL = `/liste-des-jeux/${storyId}/${nextScene}`;
    const nextScene2URL = `/liste-des-jeux/${storyId}/${nextScene2}`;

    return (
      <div className="clickable-element">
        <div className="clickable-element__scene">
          <h1>{description}</h1>
          <img
            src=""
            alt="Fiche personnage"
          />
          {nextScene && <Link to={nextSceneURL}><button className="clickable-element__redirect" type="button">Choix 1</button></Link>}
          {nextScene2 && <Link to={nextScene2URL}><button className="clickable-element__redirect" type="button">Choix 2</button></Link>}
        </div>
      </div>
    );
  }

  return (
    <Redirect to="/" exact />
  );
};

clickableElement.propTypes = ({
  scene: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
});

export default clickableElement;
