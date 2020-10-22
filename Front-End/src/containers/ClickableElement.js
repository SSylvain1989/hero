// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import clickableElement from '../components/Game/ClickableElement';
// == Import : actions

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  // Récupérer la scene par rapport au ownProps.sceneId
  story: state.game.story,
  id: ownProps.sceneId,
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
const ClickableElementContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(clickableElement);

// == Export
export default ClickableElementContainer;
