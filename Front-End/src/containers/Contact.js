/* eslint-disable import/named */
// == Import : npm
import { connect } from 'react-redux';

// == Import : actions
import { contact } from '../actions/contact';
import { changeContactFieldValue, resetFields } from '../actions/field';
import Contact from '../components/Navigation/Contact';

// Action Creators
const mapStateToProps = (state) => ({
  email: state.field.contact.email,
  message: state.field.contact.message,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeContactFieldValue(value, name));
  },
  handleContact: () => {
    dispatch(contact());
  },
  resetFields: () => {
    dispatch(resetFields());
  },
});

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// == Export
export default ContactContainer;
