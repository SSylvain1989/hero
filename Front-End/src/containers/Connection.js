// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Connection from '../components/Navigation/Connection';

// == Import : actions
import { loginSubmit } from '../actions/user';
import { changeLoginField, resetFields } from '../actions/field';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  userName: state.field.login.userName,
  password: state.field.login.password,
  isLoged: state.field.isLoged,
  sessionUserName: state.field.session.userName,
  messagesError: state.field.messagesError,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  onChange: (value, name) => {
    dispatch(changeLoginField(value, name));
  },
  onSubmit: () => {
    dispatch(loginSubmit());
  },
  resetFields: () => {
    dispatch(resetFields());
  },
});

// Container
const ConnectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connection);

// == Export
export default ConnectionContainer;
