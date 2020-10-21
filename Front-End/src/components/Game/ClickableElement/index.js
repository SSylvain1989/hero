import React from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';

import './clickableElement.scss';

const clickableElement = ({ story }) => {
  const { histoire, scene } = useParams();

  if (story.history !== undefined) {
    const description = story.history.scene_list[1].details_scene.scene_description;
    const nextScene = `/histoires/${histoire}/scene/${story.history.scene_list[scene].next_scene_id}`;
    const nextScene2 = `/histoires/${histoire}/scene/${story.history.scene_list[scene].next_scene_id2}`;

    return (
      <div className="clickable-element">
        <div className="clickable-element__scene">
          <h1>{description}</h1>
          <img
            src=""
            alt="Fiche personnage"
          />
          <Link to={nextScene}><button className="clickable-element__redirect" type="button">Porte</button></Link>
          <Link to={nextScene2}><button className="clickable-element__redirect" type="button">Vieillard</button></Link>
        </div>
      </div>
    );
  }

  return (
    <Redirect to={`/histoires/${histoire}`} />
  );
};

export default clickableElement;
