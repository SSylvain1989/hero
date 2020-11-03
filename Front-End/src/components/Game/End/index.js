import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './end.scss';

const End = ({ scene, storyId, sendEndDetails }) => {
  if (scene !== undefined) {
    useEffect(() => {
      sendEndDetails(storyId, scene.details_scene.scene_name);
    }, []);
    return (
      <div className="end">
        <div className="end__scene">
          <img
            src={scene.img_scene}
            alt="mooving-minautor"
          />
          <h1>Image de fin</h1>
          <div className="end__scene--modal">
            <p>{scene.finish_text}</p>
            <div className="end__scene--modalbuttons">
              <Link to="/liste-des-jeux">
                <button type="button">
                  Retourner à la liste des jeux
                </button>
              </Link>
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

End.propTypes = ({
  scene: PropTypes.shape({
    img_scene: PropTypes.string.isRequired,
    finish_text: PropTypes.string.isRequired,
    details_scene: PropTypes.shape({
      scene_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  storyId: PropTypes.number.isRequired,
  sendEndDetails: PropTypes.func.isRequired,
});

export default End;
