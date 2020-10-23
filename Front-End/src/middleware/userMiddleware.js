/* eslint-disable no-console */
import axios from 'axios';

import {
  EMAIL_SUBMIT,
  USERNAME_SUBMIT,
  PASSWORD_SUBMIT,
  LOGIN_SUBMIT,
  loginHandler,
  saveSession,
  CHECK_CONNEXION,
  LOGOUT_HANDLER,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EMAIL_SUBMIT:
      axios.post('http://34.207.247.234:3000/api/profile/edit', { email: store.getState().field.profile.email })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case USERNAME_SUBMIT:
      axios.post('http://34.207.247.234:3000/api/profile/edit', { userName: store.getState().field.profile.userName })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case PASSWORD_SUBMIT:
      axios.post('http://34.207.247.234:3000/api/profile/edit',
        {
          password: store.getState().field.profile.password,
          passwordConfirm: store.getState().field.profile.passwordConfirm,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case LOGIN_SUBMIT:
      axios.post('http://34.207.247.234:3000/api/log-in',
        {
          password: store.getState().field.login.password,
          userName: store.getState().field.login.userName,
        },
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveSession(response.data.session));
          store.dispatch(loginHandler());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case LOGOUT_HANDLER:
      axios.post('http://34.207.247.234:3000/api/log-out',
        {},
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveSession(response.data.session));
          store.dispatch(loginHandler());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    case CHECK_CONNEXION:
      axios.post('http://34.207.247.234:3000/api/login-check',
        {},
        { withCredentials: true })
        .then((response) => {
          if (response.data.session.connected_user) {
            store.dispatch(saveSession(response.data.session));
            store.dispatch(loginHandler());
          }
          else store.dispatch(saveSession(response.data.session));
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
