import { CONTACT_RESPONSE } from '../actions/contact';

const initialState = {
  response: '',
  messages: [],
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_RESPONSE:
      console.log(action.response);
      return {
        ...state,
        response: action.response,
        message: action.response.message,
      };
    default:
      return state;
  }
};

export default contact;
