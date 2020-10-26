import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerFrame from 'src/containers/PlayerFrame';

import './battle.scss';

const Battle = ({
  scene, storyId, setOpponent, handleAttack, playerIsAlive, opponentIsAlive,
}) => {
  if (scene !== undefined) {
    useEffect(() => {
      setOpponent(scene.details_scene);
    }, []);

    const description = scene.details_scene.scene_description;

    const handleOnAttackClick = () => {
      handleAttack();
    };

    return (
      <div className="battle-element">
        <div className="battle-element__scene">
          <h1>{description}</h1>
          <div className="battle-element__scene--image-container">
            <PlayerFrame />
          </div>
          <button className="battle-element__scene-attack" type="button" onClick={handleOnAttackClick}>Attaquer</button>
          {!playerIsAlive && <Redirect to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`} exact />}
          {!opponentIsAlive && <Redirect to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`} exact />}
        </div>
      </div>
    );
  }
  return (
    <Redirect to="/" exact />
  );
};

Battle.propTypes = ({
  scene: PropTypes.shape({
    details_scene: PropTypes.shape({
      scene_id: PropTypes.number,
      scene_name: PropTypes.string,
      scene_description: PropTypes.string,
      scene_type: PropTypes.string,
      opponent_name: PropTypes.string,
      opponent_hp: PropTypes.number,
      opponent_atk: PropTypes.number,
      opponent_def: PropTypes.number,
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
  handleAttack: PropTypes.func.isRequired,
  setOpponent: PropTypes.func.isRequired,
  playerIsAlive: PropTypes.bool.isRequired,
  opponentIsAlive: PropTypes.bool.isRequired,
});

export default Battle;
