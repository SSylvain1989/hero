// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

// == Import
import parchemin from '../../../images/parchemin.png';
// == Import scss
import './start.scss';

// == Composant
const Start = ({ scene, storyId, image }) => {
  if (scene !== undefined) {
    const text = scene.details_scene.scene_text;
    const nextScene = scene.next_scene_id;
    const nextSceneURL = `/liste-des-jeux/${storyId}/${nextScene}`;

    return (
      <div className="start">
        <div className="start__scene">
          <img
            src={image}
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
              <Link to={nextSceneURL}><button type="button">Démarrer</button></Link>
            </div>
          </div>
        </div>
        <div className="start__image-background">
          <img
            src={`${scene.img_scene}`}
            alt="background"
          />
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
  image: PropTypes.string.isRequired,
});

// == Export
export default Start;
