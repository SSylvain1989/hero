import axios from 'axios';

import {
  EMAIL_SUBMIT,
  USERNAME_SUBMIT,
  PASSWORD_SUBMIT,
  LOGIN_SUBMIT,
  loginHandler,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EMAIL_SUBMIT:
      axios.post('http://localhost:3000/api/profile/edit', { email: store.getState().field.profile.email })
        .then((response) => {
          console.log('soumis');
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case USERNAME_SUBMIT:
      axios.post('http://localhost:3000/api/profile/edit', { userName: store.getState().field.profile.userName })
        .then((response) => {
          console.log('soumis');
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case PASSWORD_SUBMIT:
      axios.post('http://localhost:3000/api/profile/edit',
        {
          password: store.getState().field.profile.password,
          passwordConfirm: store.getState().field.profile.passwordConfirm,
        })
        .then((response) => {
          console.log('soumis');
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case LOGIN_SUBMIT:
      axios.post('http://localhost:3000/api/log-in',
        {
          password: store.getState().field.login.password,
          userName: store.getState().field.login.userName,
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(loginHandler());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
