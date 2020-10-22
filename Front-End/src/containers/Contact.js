// == Import : npm
import { connect } from 'react-redux';

// == Import : local
// import Signup from 'src/components/Navigation/Signup';

// == Import : actions
import { contact } from '../actions/contact';
import { changeContactFieldValue } from '../actions/field';
import Contact from '../components/Navigation/Contact';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de contact
 * - mapStateToProps met à dispo 2 params (théoriquement)
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  email: state.field.contact.email,
  message: state.contact.message,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de contact
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, message) => {
    dispatch(changeContactFieldValue(value, message));
  },
  handleContact: () => {
    dispatch(contact());
  },
});

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// == Export
export default ContactContainer;
