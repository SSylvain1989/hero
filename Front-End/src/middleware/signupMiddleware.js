import axios from 'axios';
import {
  SIGNUP,
  signupResponse,
} from '../actions/signup';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const state = store.getState();
      const signupFormValues = state.field.signup;
      console.log(signupFormValues);
      axios.post('http://localhost:3000/api/sign-up', { signupFormValues })
        .then((response) => {
          store.dispatch(signupResponse(response.data));
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

export default signupMiddleware;
