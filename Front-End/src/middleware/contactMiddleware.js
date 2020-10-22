import axios from 'axios';
import {
  CONTACT,
  contactResponse,
} from '../actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONTACT: {
      const state = store.getState();
      const contactFormValues = state.field.contact;
      // Renommer userName pour correspondre avec le back
      contactFormValues.userName = contactFormValues.message;
      console.log(contactFormValues);
      axios.post('http://localhost:3000/api/sign-up', { ...contactFormValues })
        .then((response) => {
          store.dispatch(contactResponse(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default contactMiddleware;
