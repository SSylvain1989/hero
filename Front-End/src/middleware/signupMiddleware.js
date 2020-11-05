import axios from 'axios';
import {
  SIGNUP,
  signupResponse,
  signupError,
} from '../actions/signup';

import { resetFields } from '../actions/field';

import baseURL from '../config';

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const state = store.getState();
      const signupFormValues = state.field.signup;
      // Renommer userName pour correspondre avec le back
      signupFormValues.userName = signupFormValues.username;
      axios.post(`${baseURL}/api/sign-up`, { ...signupFormValues })
        .then((response) => {
          store.dispatch(signupResponse(response.data.userSave));
          store.dispatch(resetFields());
        })
        .catch((error) => {
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
