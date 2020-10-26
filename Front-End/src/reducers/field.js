import {
  CHANGE_SIGNUP_FIELD_VALUE,
  CHANGE_PROFILE_FIELD_VALUE,
  CHANGE_LOGIN_FIELD_VALUE,
  RESET_FIELDS,
} from '../actions/field';

import {
  LOGIN_HANDLER,
  SAVE_SESSION,
  LOGIN_ERROR,
  SHOW_MODAL_TOOGLE,
  SAVE_MESSAGE,
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
    showModal: false,
    message: '',
  },
  login: {
    userName: '',
    password: '',
  },
  session: {
    connected_user: false,
    detail_id: null,
    email: '',
    id: null,
    userName: '',
  },
  loginErrorMessage: [],
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
    case SAVE_MESSAGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          message: action.message,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginErrorMessage: action.response,
      };
    case SHOW_MODAL_TOOGLE:
      return {
        ...state,
        profile: {
          ...state.profile,
          showModal: !state.profile.showModal,
        },
      };
    case RESET_FIELDS:
      return {
        ...state,
        signup: {
          ...state.signup,
          username: '',
          email: '',
          emailConfirm: '',
          password: '',
          passwordConfirm: '',
        },
        profile: {
          ...state.profile,
          email: '',
          userName: '',
          password: '',
          passwordConfirm: '',
          showModal: false,
        },
        login: {
          userName: '',
          password: '',
        },
      };
    default:
      return state;
  }
};

export default field;
