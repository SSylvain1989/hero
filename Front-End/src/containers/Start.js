import { connect } from 'react-redux';
import Start from '../components/Game/Start';

// Action Creators


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  // il faut recuperer tout l'objet storie dispo dans le store
  // au déclanchement du bouton "jouer maintenant"
  storyStart: state.game.story,
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
