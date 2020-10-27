// == Import : npm
import { connect } from 'react-redux';
// == Import : local
import Board from '../components/Navigation/Board';
// Action Creators
import { fetchDataBoard } from '../actions/navigation';

// === State (données) ===
// - * - mapStateToProps retroune un objet de props pour le composant de présentation
// - * - mapStateToProps met à dispo 2 params
// - *  - state : le state du store (getState)
// - *  - ownProps : les props passées au container
// Pas de data à transmettre ? const mapStateToProps = null 
// const mapStateToProps = (state) => ({});
// - * - //
const mapStateToProps = (state) => ({
  boardData: state.navigation.dataBoard,
});

/// - * === Actions ===
// - * - mapDispatchToProps retroune un objet de props pour le composant de présentation
// - * - mapDispatchToProps met à dispo 2 params
// - *  - dispatch : la fonction du store pour dispatcher une action
// - *  - ownProps : les props passées au container
// - * Pas de disptach à transmettre ? const mapDispatchToProps = () => ({});
// - */
const mapDispatchToProps = (dispatch) => ({
  fetchDataBoard: () => {
    dispatch(fetchDataBoard());
  },
});

// Container
const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

// == Export
export default BoardContainer;
