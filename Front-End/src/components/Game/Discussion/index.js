// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './discussion.scss';

// Récupérer textes histoires et scène suivante (bouton)
const Discussion = ({ story }) => {
  console.log('je recupere bien mes story', story);
  return (
    <div className="discussion">
      <div className="discussion__scene">
        <div className="discussion__scene--left">
          <h1>Description</h1>
        </div>
        <div className="discussion__scene--right">
          <p>Texte d'information pour le joueur</p>
          <div className="discussion__scene--rightbuttons">
            <button type="button">Retour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Discussion.propTypes = {
//   fetchTextHistory: PropTypes.func.isRequired,
//   descriptionHistory: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   fetchNextHistory: PropTypes.func.isRequired,
//   idHistory: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

// == Export
export default Discussion;
