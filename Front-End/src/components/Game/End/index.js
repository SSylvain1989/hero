import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './end.scss';

const End = ({ scene, storyId }) => {
  if (scene !== undefined) {
    return (
      <div className="end">
        <div className="end__scene">
          <h1>Image de fin</h1>
          <div className="end__scene--modal">
            <p>{scene.finish_text}</p>
            <div className="end__scene--modalbuttons">
              <button type="button"><Link to="/liste-des-jeux">Retourner à la liste des jeux</Link></button>
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
    finish_text: PropTypes.string.isRequired,
  }).isRequired,
});

export default End;
