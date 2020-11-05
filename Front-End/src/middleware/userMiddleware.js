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
  loginError,
  HANDLE_ACCOUNT_DELETION,
  saveMessage,
  addProfileErrorMessage,
} from '../actions/user';

import { resetFields } from '../actions/field';

import baseURL from '../config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EMAIL_SUBMIT:
      axios.patch(`${baseURL}/api/profile/edit`,
        { email: store.getState().field.profile.email },
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveMessage(response.data.message));
          store.dispatch(saveSession(response.data.session));
          store.dispatch(resetFields());
          store.dispatch((addProfileErrorMessage([])));
        })
        .catch((error) => {
          store.dispatch((addProfileErrorMessage(error.response.data.message)));
        }).then(() => {
          store.dispatch(resetFields());
        });
      next(action);
      break;
    case USERNAME_SUBMIT:
      axios.patch(`${baseURL}/api/profile/edit`,
        { userName: store.getState().field.profile.userName },
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveMessage(response.data.message));
          store.dispatch(saveSession(response.data.session));
          store.dispatch((addProfileErrorMessage([])));
        })
        .catch((error) => {
          store.dispatch((addProfileErrorMessage(error.response.data.message)));
        }).then(() => {
          store.dispatch(resetFields());
        });
      next(action);
      break;
    case PASSWORD_SUBMIT:
      axios.patch(`${baseURL}/api/profile/edit`,
        {
          password: store.getState().field.profile.password,
          passwordConfirm: store.getState().field.profile.passwordConfirm,
        },
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveMessage(response.data.message));
          store.dispatch(resetFields());
          store.dispatch((addProfileErrorMessage([])));
        })
        .catch((error) => {
          store.dispatch((addProfileErrorMessage(error.response.data.message)));
        }).then(() => {
          store.dispatch(resetFields());
        });
      next(action);
      break;
    case LOGIN_SUBMIT:
      axios.post(`${baseURL}/api/log-in`,
        {
          password: store.getState().field.login.password,
          userName: store.getState().field.login.userName,
        },
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveSession(response.data.session));
          store.dispatch(loginHandler());
          store.dispatch(resetFields());
        })
        .catch((error) => {
          store.dispatch(loginError(error.response.data.message));
        });
      next(action);
      break;
    case LOGOUT_HANDLER:
      axios.post(`${baseURL}/api/log-out`,
        {},
        { withCredentials: true })
        .then((response) => {
          store.dispatch(saveSession(response.data.session));
          store.dispatch(loginHandler());
          store.dispatch(resetFields());
        })
        .catch(() => {
        });
      next(action);
      break;
    case CHECK_CONNEXION:
      axios.post(`${baseURL}/api/login-check`,
        {},
        { withCredentials: true })
        .then((response) => {
          if (response.data.session.connected_user) {
            store.dispatch(saveSession(response.data.session));
            store.dispatch(loginHandler());
          }
          else store.dispatch(saveSession(response.data.session));
        })
        .catch(() => {
        });
      next(action);
      break;
    case HANDLE_ACCOUNT_DELETION:
      axios.delete(`${baseURL}/api/profile/delete`,
        { withCredentials: true })
        .then(() => {
          store.dispatch(loginHandler());
          store.dispatch(resetFields());
        })
        .catch(() => {
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
