import React from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import parchemin from '../../../images/parchemin.png';

import './redirection.scss';

const Redirection = ({
  scene, storyId, opponentIsAlive, image,
}) => {
  if (scene !== undefined) {
    const text = scene.details_scene.scene_text;
    return (
      <div className="redirection">
        <div className="redirection__scene">
          <img
            src={image}
            alt="mooving-minautor"
          />
          <div className="redirection__scene--left" />
          <div className="redirection__scene--right">
            <div className="redirection__scene--right-text">
              <p>{text}</p>
              <img
                src={parchemin}
                alt="parchemin"
              />
            </div>
            <div className="redirection__scene--right-buttons">
              {opponentIsAlive && <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`}><button type="button">Continuer</button></Link>}
              {!opponentIsAlive && <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`}><button type="button">Continuer</button></Link>}
            </div>
          </div>
        </div>
        <div className="redirection__image-background">
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

Redirection.propTypes = ({
  scene: PropTypes.shape({
    details_scene: PropTypes.shape({
      scene_id: PropTypes.number,
      scene_name: PropTypes.string,
      scene_description: PropTypes.string,
      scene_type: PropTypes.string,
      scene_text: PropTypes.string,
    }).isRequired,
    previous_scene_id: PropTypes.number.isRequired,
    next_scene: PropTypes.shape({
      next_scene_id: PropTypes.number.isRequired,
      next_scene_name: PropTypes.string.isRequired,
    }).isRequired,
    next_scene2: PropTypes.shape({
      next_scene_id2: PropTypes.number,
      next_scene_name2: PropTypes.string,
    }),
    img_scene: PropTypes.string.isRequired,
  }).isRequired,
  storyId: PropTypes.number.isRequired,
  opponentIsAlive: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
});

export default Redirection;
