import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
      }, 1000);
    };

    return (
      <div className="battle-element">
        <div className="battle-element__scene">
          {ready && opponent.isAlive && <h1><OpponentFrame /></h1>}
          {opponent.isAlive && (
            <img
              className="battle-element__scene--opponent"
              src={scene.details_scene.opponent_img}
              alt="El Papito"
            />
          )}
          <div className="battle-element__scene--image-container">
            <img
              src={image}
              alt="player-info"
            />
          </div>
          <PlayerFrame toggle />
          {!display && opponent.isAlive && <button className="battle-element__scene-attack" type="button" onClick={handleOnAttackClick}>Attaquer</button>}
          {ready && !playerIsAlive && <Redirect to={`/liste-des-jeux/${storyId}/${scene.next_scene2.next_scene_id2}`} exact />}
          {ready && !opponent.isAlive && (
            <div className="battle-element__scene-finish">
              <h1>Bravo, ton adversaire est à terre</h1>
              <Link to={`/liste-des-jeux/${storyId}/${scene.next_scene.next_scene_id}`}>
                <button type="button">
                  Continuer
                </button>
              </Link>
            </div>
          )}
          <div className="battle-element__scene__log">
            {/* <p>Appuyer sur attaquer pour que le combat commence ..!</p> */}
            {display && opponent.isAlive && logOpponentFight.length > 0 && <p className="battle-element__scene__logText"> - {logOpponentFight[4]} PV </p>}
            {/* {!opponent.isAlive && <p>Votre adversaire est mort dans d'atroces souffrances</p>}
          {!opponent.isAlive && <p>Vous êtes toujours debout avec 'à définir' point de vie</p>} */}
          </div>
          <div className="battle-element__scene__logTwo">
            {/* <p>Appuyer sur attaquer pour que le combat commence ..!</p> */}
            {display && opponent.isAlive && logPlayerFight.length > 0 && <p className="battle-element__scene__logTextTwo"> - {logPlayerFight[4]} PV </p>}
            {/* {!opponent.isAlive && <p>Votre adversaire est mort dans d'atroces souffrances</p>}
          {!opponent.isAlive && <p>Vous êtes toujours debout avec 'à définir' point de vie</p>} */}
          </div>
        </div>
        <div className="battle-element__image-background">
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

Battle.propTypes = ({
  scene: PropTypes.shape({
    img_scene: PropTypes.string.isRequired,
    details_scene: PropTypes.shape({
      opponent_img: PropTypes.string.isRequired,
      scene_opponent_id: PropTypes.number.isRequired,
    }).isRequired,
    next_scene: PropTypes.shape({
      next_scene_id: PropTypes.number.isRequired,
    }).isRequired,
    next_scene2: PropTypes.shape({
      next_scene_id2: PropTypes.number,
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
  logOpponentFight: PropTypes.array.isRequired,
  logPlayerFight: PropTypes.array.isRequired,
});

export default Battle;
