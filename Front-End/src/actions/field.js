export const CHANGE_SIGNUP_FIELD_VALUE = 'CHANGE_SIGNUP_FIELD_VALUE';
export const CHANGE_PROFILE_FIELD_VALUE = 'CHANGE_PROFILE_FIELD_VALUE';
export const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';

export const CHANGE_CONTACT_FIELD_VALUE = 'CHANGE_CONTACT_FIELD_VALUE';

export const changeSignupFieldValue = (value, name) => ({
  type: CHANGE_SIGNUP_FIELD_VALUE,
  value,
  name,
});

export const changeProfileField = (value, name) => ({
  type: CHANGE_PROFILE_FIELD_VALUE,
  value,
  name,
});

export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD_VALUE,
  value,
  name,
});

export const changeContactFieldValue = (value, message) => ({
  type: CHANGE_CONTACT_FIELD_VALUE,
  value,
  message,
});
