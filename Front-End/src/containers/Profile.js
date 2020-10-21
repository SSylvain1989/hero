// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from '../components/Navigation/Profile';

// == Import : actions
import { emailSubmit, usernameSubmit, passwordSubmit } from '../actions/user';
import { changeProfileField } from '../actions/field';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  email: state.field.profile.email,
  userName: state.field.profile.userName,
  password: state.field.profile.password,
  passwordConfirm: state.field.profile.passwordConfirm,
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
    dispatch(changeProfileField(value, name));
  },
  handleEmailSubmit: () => {
    dispatch(emailSubmit());
  },
  handleUsernameSubmit: () => {
    dispatch(usernameSubmit());
  },
  handlePasswordSubmit: () => {
    dispatch(passwordSubmit());
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
