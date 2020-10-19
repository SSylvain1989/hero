// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GameDetail from '../components/Navigation/GameDetail';

// Action Creators
import { fetchGameDetail } from '../actions/navigation';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({ 

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  fetchGameDetail: () => {
    dispatch(fetchGameDetail());
  },
});

// Container
const GameDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameDetail);

// == Export
export default GameDetailContainer;