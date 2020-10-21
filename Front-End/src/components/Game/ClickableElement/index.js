import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './clickableElement.scss';

const clickableElement = ({ story, id }) => {
  if (story.history !== undefined) {
    const storyId = story.history.history_id;
    const description = story.history.scene_list[id].details_scene.scene_description;
    const nextScene = story.history.scene_list[id].next_scene_id;
    const nextScene2 = story.history.scene_list[id].next_scene_id2;
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
          {nextScene && <Link to={nextSceneURL}><button className="clickable-element__redirect" type="button">Porte</button></Link>}
          {nextScene2 && <Link to={nextScene2URL}><button className="clickable-element__redirect" type="button">Vieillard</button></Link>}
        </div>
      </div>
    );
  }

  return (
    <Redirect to="/" exact />
  );
};

export default clickableElement;
