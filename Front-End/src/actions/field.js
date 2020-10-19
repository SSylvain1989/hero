export const CHANGE_SIGNUP_FIELD_VALUE = 'CHANGE_SIGNUP_FIELD_VALUE';

export const changeSignupFieldValue = (value, name) => ({
  type: CHANGE_SIGNUP_FIELD_VALUE,
  value,
  name,
});
