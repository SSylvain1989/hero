// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GamesList from '../components/Navigation/GamesList';

// Action Creators
import { fetchGames } from '../actions/navigation';
import { resetStory } from '../actions/game';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  gamesList: state.navigation.games,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  fetchGames: () => {
    dispatch(fetchGames());
  },
  resetStory: () => {
    dispatch(resetStory());
  },
});

// Container
const GamesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesList);

// == Export
export default GamesListContainer;
