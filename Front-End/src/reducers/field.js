import {
  CHANGE_SIGNUP_FIELD_VALUE,
  CHANGE_PROFILE_FIELD_VALUE,
  CHANGE_LOGIN_FIELD_VALUE,
  CHANGE_CONTACT_FIELD_VALUE,
} from '../actions/field';

import {
  LOGIN_HANDLER,
  SAVE_SESSION,
} from '../actions/user';

export const initialState = {
  isLoged: false,
  signup: {
    username: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
  },
  profile: {
    email: '',
    userName: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    userName: '',
    password: '',
  },
  contact: {
    email: '',
    message: '',
  },
  session: {
    connected_user: false,
    detail_id: null,
    email: '',
    id: null,
    userName: '',
  },
};

const field = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNUP_FIELD_VALUE:
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.name]: action.value,
        },
      };
    case CHANGE_PROFILE_FIELD_VALUE:
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.name]: action.value,
        },
      };
    case CHANGE_LOGIN_FIELD_VALUE:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        },
      };
    case CHANGE_CONTACT_FIELD_VALUE:
      return {
        ...state,
        contact: {
          ...state.login,
          [action.email]: action.value,
        },
      };
    case LOGIN_HANDLER:
      return {
        ...state,
        isLoged: !state.isLoged,
      };
    case SAVE_SESSION:
      return {
        ...state,
        session: {
          ...action.session,
        },
      };
    default:
      return state;
  }
};

export default field;
