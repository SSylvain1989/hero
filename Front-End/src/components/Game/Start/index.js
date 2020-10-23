// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

// == Import
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';
// == Import scss
import './start.scss';

// == Composant
const Start = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const text = scene.details_scene.scene_text;
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
              <p>{text}</p>
              <img
                src={parchemin}
                alt="parchemin"
              />
            </div>
            <div className="start__scene--right-buttons">
              <button type="button"><Link to={nextSceneURL}>Démarrer</Link></button>
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

Start.propTypes = ({
  scene: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
});

// == Export
export default Start;
