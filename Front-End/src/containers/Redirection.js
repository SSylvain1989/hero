// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import Redirection from '../components/Game/Redirection';
// == Import : actions
import getSceneById from '../selectors/getSceneById';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, { sceneId }) => ({
  // Récupérer la scene par rapport au ownProps.sceneId
  storyId: state.game.story.history.history_id,
  scene: getSceneById(sceneId, state.game.story.history.scene_list),
  playerIsAlive: state.game.playerIsAlive,
  opponentIsAlive: state.game.opponentIsAlive,
  image: state.game.player.image,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = () => ({});

// Container
const RedirectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Redirection);

// == Export
export default RedirectionContainer;
