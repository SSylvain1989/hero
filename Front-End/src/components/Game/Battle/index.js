import React from 'react';
<<<<<<< HEAD
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import startMinautor from '../../../images/start-minautor.gif';
=======
import { Link } from 'react-router-dom';
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59

import './battle.scss';

<<<<<<< HEAD
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
=======
// == Composant
const Battle = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const { opponentName } = scene.details_scene;
    const { opponentHp } = scene.details_scene;
    const win = scene.next_scene_id;
    const lost = scene.next_scene_id2;
    const winURL = `/liste-des-jeux/${storyId}/${win}`;
    const lostURL = `/liste-des-jeux/${storyId}/${lost}`;

    return (
      <div className="battle">
        <div className="battle__scene">
          <div className="battle__opponent">
            <h1>{opponentName}</h1>
            <p>{opponentHp}</p>
          </div>
          <button className="battle__actions--attack" type="button"><Link to={winURL}>Gagné !</Link></button>
          <button className="battle__actions--defense" type="button"><Link to={lostURL}>Perdu</Link></button>
          <img
            src=""
            alt="Fiche personnage"
          />
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
        </div>
      </div>
    );
  }
<<<<<<< HEAD
  return (
    <Redirect to="/" exact />
  );
};

Battle.propTypes = ({
  scene: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
});
=======
};
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59

export default Battle;
