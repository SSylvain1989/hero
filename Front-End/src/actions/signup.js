export const SIGNUP = 'SIGNUP';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signup = () => ({
  type: SIGNUP,
});

export const signupResponse = (response) => ({
  type: SIGNUP_RESPONSE,
  response,
});

export const signupError = (message) => ({
  type: SIGNUP_ERROR,
  message,
});
