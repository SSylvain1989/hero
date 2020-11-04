import { CONTACT_RESPONSE, CONTACT_ERROR } from '../actions/contact';

const initialState = {
  response: {},
  messagesError: '',
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_RESPONSE:
      return {
        ...state,
        response: action.response,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        messagesError: action.message,
      };
    default:
      return state;
  }
};

export default contact;
