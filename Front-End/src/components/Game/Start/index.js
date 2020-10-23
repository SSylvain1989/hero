// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Link, Redirect } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59

// == Import
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';
// == Import scss
import './start.scss';

// == Composant
const Start = ({ scene, storyId }) => {
  if (scene !== undefined) {
<<<<<<< HEAD
    const text = scene.details_scene.scene_text;
=======
    const description = scene.details_scene.scene_description;
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
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
<<<<<<< HEAD
              <p>{text}</p>
=======
              <p>Texte de description de l'histoire à suivre</p>
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
              <img
                src={parchemin}
                alt="parchemin"
              />
            </div>
            <div className="start__scene--right-buttons">
<<<<<<< HEAD
=======
              <button type="button">Passer</button>
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
              <button type="button"><Link to={nextSceneURL}>Démarrer</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
<<<<<<< HEAD
  }
  return (
    <Redirect to="/" exact />
  );
=======
  };
>>>>>>> bc616a5901cc384be536f5e8db95f7a488a34e59
};

Start.propTypes = ({
  scene: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
});

// == Export
export default Start;
