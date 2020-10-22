// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

import './battle.scss';
// == Import

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
        </div>
      </div>
    );
  }
};

// == Export
export default Battle;
