// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';
// == Import scss
import './start.scss';

// == Composant
const Start = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const description = scene.details_scene.scene_description;
    const nextScene = scene.next_scene_id;
    const nextSceneURL = `/liste-des-jeux/${storyId}/${nextScene}`;

    return (
      <div className="start">
        <div className="start__scene">
          <img
            src={startMinautor}
            alt="mooving-minautor"
          />
          <div className="start__scene--left" />
          <div className="start__scene--right">
            <div className="start__scene--right-text">
              <p>Texte de description de l'histoire à suivre</p>
              <img
                src={parchemin}
                alt="parchemin"
              />
            </div>
            <div className="start__scene--right-buttons">
              <button type="button">Passer</button>
              <button type="button"><Link to={nextSceneURL}>Démarrer</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

Start.propTypes = ({
  scene: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
});

// == Export
export default Start;
