import { SIGNUP_RESPONSE } from '../actions/signup';

const initialState = {
  response: '',
  message: '',
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_RESPONSE:
      console.log(action.response);
      return {
        ...state,
        response: action.response,
      };
    default:
      return state;
  }
};

export default signup;
