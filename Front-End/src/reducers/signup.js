import { SIGNUP_RESPONSE, SIGNUP_ERROR } from '../actions/signup';

const initialState = {
  response: {},
  messagesError: [],
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_RESPONSE:
      return {
        ...state,
        response: action.response,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        messagesError: [...action.message],
      };
    default:
      return state;
  }
};

export default signup;
