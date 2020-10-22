// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Discussion from '../components/Game/Discussion';
// == Import : actions

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */

 // state.reducer.propriété ou est stocké le state
const mapStateToProps = (state) => ({
  story: state.game.story,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = () => ({ });;
 * //
 */
const mapDispatchToProps = () => ({

});

// Container
const DiscussionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Discussion);

// == Export
export default DiscussionContainer;
