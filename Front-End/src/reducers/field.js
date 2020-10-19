import {
  CHANGE_SIGNUP_FIELD_VALUE,
} from 'src/actions/field';

export const initialState = {
  signup: {
    username: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
  },
};

const field = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNUP_FIELD_VALUE:
      return {
        ...state,
        signup: {
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export default field;
