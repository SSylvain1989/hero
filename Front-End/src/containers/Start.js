import { connect } from 'react-redux';
import Start from '../components/Game/Start';
import getSceneById from '../selectors/getSceneById';
import story from '../data/histoire1';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, { sceneId }) => ({
  scene: getSceneById(sceneId, story.history.scene_list),
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = () => ({

});
// Container
const startContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(Start);

export default startContainer;
