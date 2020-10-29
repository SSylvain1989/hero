// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GameDetail from '../components/Navigation/GameDetail';

// Action Creators
import { loadStory, loadCharacterList, selectCharacter } from '../actions/game';
import getGameDetailById from '../selectors/getGameDetailById';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, { gameId }) => ({
  isStoryLoaded: state.game.isStoryLoaded,
  game: getGameDetailById(gameId, state.navigation.games),
  characterList: state.game.characterList,
  playerSelected: state.game.playerSelected,
  firstSceneId: state.game.story.history.scene_list[0].details_scene.scene_id,
  isLogged: state.field.isLoged,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  loadCharacterList: () => {
    dispatch(loadCharacterList());
  },
  loadStory: (gameId) => {
    dispatch(loadStory(gameId));
  },
  selectCharacter: (id) => {
    dispatch(selectCharacter(id));
  },
});

// Container
const GameDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameDetail);

// == Export
export default GameDetailContainer;
