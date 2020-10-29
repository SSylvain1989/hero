// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import End from '../components/Game/End';
// == Import : actions
import getSceneById from '../selectors/getSceneById';
import { endGame } from '../actions/game';

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
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  sendEndDetails: (storyId, sceneName) => {
    dispatch(endGame(storyId, sceneName));
  },
});

// Container
const EndContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(End);

// == Export
export default EndContainer;
