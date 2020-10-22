// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import Player from '../components/Game/Player';
// == Import : actions

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = () => ({
  /* !!! ATTENTION !!!
   * Il faudra un OBJECT player de cette forme
   * Si on veut afficher l'image du personnage et ses stats
   * Ici, les données sont en brut
   * Il faudra dynamiser selon l'état actuel du joueur
   */
  player: {
    name: 'Warrior',
    attackPoint: 10,
    defensePoint: 8,
    healthPoint: {
      current: 8,
      max: 20,
    },
    image: '',
    inventory: {},
  },
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
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);

// == Export
export default AppContainer;
