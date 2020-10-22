import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';

import './choice.scss';

const Choice = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const text = scene.details_scene.scene_text;
    const nextScene = scene.next_scene_id;
    const nextSceneURL = `/liste-des-jeux/${storyId}/${nextScene}`;

    return (
      <div className="choice">
        <div className="choice__scene">
          <img
            src={startMinautor}
            alt="mooving-minautor"
          />
          <div className="choice__scene--left" />
          <div className="choice__scene--right">
            <div className="choice__scene--right-text">
              <p>{text}</p>
              <img
                src={parchemin}
                alt="parchemin"
              />
            </div>
            <div className="choice__scene--right-buttons">
              {nextScene && <Link to={nextSceneURL}><button type="button">Choix 1</button></Link>}
              {nextScene && <Link to={nextSceneURL}><button type="button">Choix 2</button></Link>}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Redirect to="/" exact />
  );
};

export default Choice;
