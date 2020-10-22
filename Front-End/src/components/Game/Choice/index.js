import React from 'react';
import { Link } from 'react-router-dom';

import './choice.scss';

const Choice = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;
    const nextScene = scene.next_scene_id;
    const nextScene2 = scene.next_scene_id2;
    const nextSceneURL = `/liste-des-jeux/${storyId}/${nextScene}`;
    const nextScene2URL = `/liste-des-jeux/${storyId}/${nextScene2}`;
    return (
      <div className="choice">
        <div className="choice__scene">
          <div className="choice__scene--left">
            <h1>{description}</h1>
          </div>
          <div className="choice__scene--right">
            <p>Texte d'information pour le joueur</p>
            <div className="choice__scene--rightbuttons">
              {nextScene && <button type="button"><Link to={nextSceneURL}>Choix 1</Link></button>}
              {nextScene2 && <button type="button"><Link to={nextScene2URL}>Choix 2</Link></button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Choice;
