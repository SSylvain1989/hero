export const SIGNUP = 'SIGNUP';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';

export const signup = () => ({
  type: SIGNUP,
});

export const signupResponse = (response) => ({
  type: SIGNUP,
  response,
});
