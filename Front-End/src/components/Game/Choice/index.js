import React from 'react';
<<<<<<< HEAD
import { Link, Redirect } from 'react-router-dom';
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';
=======
import { Link } from 'react-router-dom';
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59

import './choice.scss';

const Choice = ({ scene, storyId }) => {
  if (scene !== undefined) {
<<<<<<< HEAD
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
=======
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
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
            </div>
          </div>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
  return (
    <Redirect to="/" exact />
  );
=======
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
};

export default Choice;
