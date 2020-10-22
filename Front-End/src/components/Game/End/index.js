import React from 'react';
import { Link } from 'react-router-dom';

import './end.scss';

const End = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;
    const replay = `/liste-des-jeux/${storyId}`;
    const backHome = '/liste-des-jeux';
    return (
      <div className="end">
        <div className="end__scene">
          <h1>Image de fin</h1>
          <div className="end__scene--modal">
            <p>{description}</p>
            <p>Notation de l'histoire</p>
            <div className="end__scene--modalbuttons">
              <button type="button"><Link to={replay}> Rejouer</Link></button>
              <button type="button"><Link to={backHome}> Menu principal</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default End;
