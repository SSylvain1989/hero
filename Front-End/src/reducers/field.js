import {
  CHANGE_SIGNUP_FIELD_VALUE,
  CHANGE_PROFILE_FIELD_VALUE,
  CHANGE_LOGIN_FIELD_VALUE,
  RESET_FIELDS,
  DISPLAY_MESSAGE_TOOGLE,
  CHANGE_CONTACT_FIELD_VALUE,
} from '../actions/field';

import {
  LOGIN_HANDLER,
  SAVE_SESSION,
  LOGIN_ERROR,
  SHOW_MODAL_TOOGLE,
  SAVE_MESSAGE,
  ADD_PROFILE_ERROR_MESSAGE,
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
    message: { toto: '' },
    errorMessage: [],
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
  messagesError: [],
  displayMessage: false,
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
          ...state.contact,
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
          message: action.message[0],
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        messagesError: action.message,
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
        contact: {
          email: '',
          message: '',
        },
        messagesError: [],
      };
    case DISPLAY_MESSAGE_TOOGLE:
      return {
        ...state,
        displayMessage: !state.displayMessage,
      };
    case ADD_PROFILE_ERROR_MESSAGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          errorMessage: [...action.errorMessage],
        },
      };
    default:
      return state;
  }
};

export default field;
