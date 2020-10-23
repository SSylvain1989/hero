import React from 'react';
import { Link } from 'react-router-dom';

import './end.scss';

const End = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;
    return (
      <div className="end">
        <div className="end__scene">
          <h1>Image de fin</h1>
          <div className="end__scene--modal">
            <p>{description}</p>
            <p>Notation de l'histoire</p>
            <div className="end__scene--modalbuttons">
              <button type="button"><Link to="/liste-des-jeux">Retourner à la liste des jeux</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default End;
