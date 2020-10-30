import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerFrame from 'src/containers/PlayerFrame';
import OpponentFrame from 'src/containers/OpponentFrame';

import './battle.scss';

const Battle = ({
  scene,
  storyId,
  setOpponent,
  handleAttack,
  playerIsAlive,
  image,
  opponent,
  logOpponentFight,
  logPlayerFight,
}) => {
  console.log('logOponentFight[2]', logOpponentFight);
  console.log('!playerIsAlive', !playerIsAlive);

  if (scene !== undefined) {
    const [ready, setReady] = useState(false);
    useEffect(() => {
      setOpponent(scene.details_scene.scene_opponent_id);
      setReady(true);
    }, []);

    const [display, setDisplay] = useState(false);

    const handleOnAttackClick = () => {
      handleAttack();
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 5000);
    };

    return (
      <div className="battle-element">
        <div className="battle-element__scene">
          {ready && <h1><OpponentFrame /></h1>}
          <img
            className="battle-element__scene--opponent"
            src={scene.details_scene.opponent_img}
            alt="El Papito"
          />
          <div className="battle-element__scene--image-container">
            <img
              src={image}
              alt="player-info"
            />
          </div>
          <PlayerFrame />
          {!display && <button className="battle-element__scene-attack" type="button" onClick={handleOnAttackClick}>Attaquer</button>}
          {ready && !playerIsAlive && <Redirect to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`} exact />}
          {ready && !opponent.isAlive && <Redirect to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`} exact />}
        </div>
        <div className="battle-element__image-background">
          <img
            src={`${scene.img_scene}`}
            alt="background"
          />
        </div>
        <div className="battle-element__log">
          {/* le X vous attaque mais vous défendez et perdez réellement X point de vie */}
          <p>Appuyer sur attaquer pour que le combat commence ..!</p>
          {display && logOpponentFight.length > 0 && <p className="battle-element__logText">Vous attaquez mais le {logPlayerFight[2]} se défend et perd réellement {logOpponentFight[4]} point(s) de vie</p>}
          {display && logPlayerFight.length > 0 && <p className="battle-element__logTextTwo">Le {logPlayerFight[2]} vous attaque mais vous défendez et perdez réellement {logPlayerFight[4]} point(s) de vie</p>}
          {!opponent.isAlive && <p>Votre adversaire est mort dans d'atroces souffrances</p>}
          {!opponent.isAlive && <p>Vous êtes toujours debout avec 'à définir' point de vie</p>}
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
      scene_opponent_id: PropTypes.number,
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
  opponent: PropTypes.shape({
    isAlive: PropTypes.bool.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
});

export default Battle;
