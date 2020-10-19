import { SIGNUP_RESPONSE } from '../actions/signup';

const initialState = {
  response: '',
  messages: [],
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_RESPONSE:
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

export default signup;
