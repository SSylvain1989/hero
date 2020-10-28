import axios from 'axios';
import {
  SIGNUP,
  signupResponse,
  signupError,
} from '../actions/signup';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const state = store.getState();
      const signupFormValues = state.field.signup;
      // Renommer userName pour correspondre avec le back
      signupFormValues.userName = signupFormValues.username;
      console.log(signupFormValues);
      axios.post('http://34.207.247.234:3000/api/sign-up', { ...signupFormValues })
        .then((response) => {
          store.dispatch(signupResponse(response.data.userSave));
        })
        .catch((error) => {
          console.error('signupMidlleware', error.response);
          store.dispatch(signupError(error.response.data.message));
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
