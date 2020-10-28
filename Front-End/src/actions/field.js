export const CHANGE_SIGNUP_FIELD_VALUE = 'CHANGE_SIGNUP_FIELD_VALUE';
export const CHANGE_PROFILE_FIELD_VALUE = 'CHANGE_PROFILE_FIELD_VALUE';
export const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const RESET_FIELDS = 'RESET_FIELDS';
export const DISPLAY_MESSAGE_TOOGLE = 'DISPLAY_MESSAGE_TOOGLE';
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

export const resetFields = () => ({
  type: RESET_FIELDS,
});

export const displayMessageToggle = () => ({
  type: DISPLAY_MESSAGE_TOOGLE,
});

export const changeContactFieldValue = (value, name) => ({
  type: CHANGE_CONTACT_FIELD_VALUE,
  value,
  name,
});
