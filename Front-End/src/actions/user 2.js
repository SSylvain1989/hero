export const EMAIL_SUBMIT = 'EMAIL_SUBMIT';
export const USERNAME_SUBMIT = 'USERNAME_SUBMIT';
export const PASSWORD_SUBMIT = 'PASSWORD_SUBMIT';

export const emailSubmit = (value, name) => ({
  type: EMAIL_SUBMIT,
  value,
  name,
});

export const usernameSubmit = (value, name) => ({
  type: USERNAME_SUBMIT,
  value,
  name,
});

export const passwordSubmit = (value, name) => ({
  type: PASSWORD_SUBMIT,
  value,
  name,
});
