import React from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import startMinautor from '../../../images/start-minautor.gif';
import parchemin from '../../../images/parchemin.png';

import './choice.scss';

const Choice = ({ scene, storyId }) => {
  if (scene !== undefined) {
    const text = scene.details_scene.scene_text;
    return (
      <div className="choice">
        <div className="choice__scene">
          <img
            src={startMinautor}
            alt="mooving-minautor"
          />
          <div className="choice__scene--left" />
          <div className="choice__scene--right">
            <div className="choice__scene--right-text">
              <p>{text}</p>
              <img
                src={parchemin}
                alt="parchemin"
              />
            </div>
            <div className="choice__scene--right-buttons">
              {scene.next_scene && <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`}><button type="button">{scene.next_scene.next_scene_name}</button></Link>}
              {scene.next_scene2 && <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`}><button type="button">{scene.next_scene2.next_scene_name2}</button></Link>}
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

Choice.propTypes = ({
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
  }).isRequired,
  storyId: PropTypes.number.isRequired,
});

export default Choice;
