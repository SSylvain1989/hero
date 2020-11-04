import { CONTACT_RESPONSE, CONTACT_ERROR } from '../actions/contact';

const initialState = {
  response: { },
  messagesError: '',
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_RESPONSE:
      console.log(action.response);
      return {
        ...state,
        response: action.response,
      };
    case CONTACT_ERROR:
      console.log(action.message);
      return {
        ...state,
        messagesError: action.message,
      };
    default:
      return state;
  }
};

export default contact;
