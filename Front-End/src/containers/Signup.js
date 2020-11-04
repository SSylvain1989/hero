// == Import : npm
import { connect } from 'react-redux';

// == Import : local
// import Signup from 'src/components/Navigation/Signup';

// == Import : actions
import { signup, signupError, signupResponse } from '../actions/signup';
import { changeSignupFieldValue, resetFields } from '../actions/field';
import Signup from '../components/Navigation/Signup';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  username: state.field.signup.username,
  email: state.field.signup.email,
  emailConfirm: state.field.signup.emailConfirm,
  password: state.field.signup.password,
  passwordConfirm: state.field.signup.passwordConfirm,
  messagesError: state.signup.messagesError,
  isLoged: state.field.isLoged,
  response: state.signup.response,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeSignupFieldValue(value, name));
  },
  handleSignup: () => {
    dispatch(signup());
  },
  resetFields: () => {
    dispatch(resetFields());
  },
  signupError: (message) => {
    dispatch(signupError(message));
  },
  // on se sert de cette fonction ci-dessous pour re-initialiser
  // le tableau de réponse ds création de cpte
  signupResponse: (response) => {
    dispatch(signupResponse(response));
  },
});

// Container
const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

// == Export
export default SignupContainer;
