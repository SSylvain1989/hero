export const EMAIL_SUBMIT = 'EMAIL_SUBMIT';
export const USERNAME_SUBMIT = 'USERNAME_SUBMIT';
export const PASSWORD_SUBMIT = 'PASSWORD_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_HANDLER = 'LOGIN_HANDLER';
export const LOGOUT_HANDLER = 'LOGOUT_HANDLER';
export const SAVE_SESSION = 'SAVE_SESSION';
export const CHECK_CONNEXION = 'CHECK_CONNEXION';

export const emailSubmit = () => ({
  type: EMAIL_SUBMIT,
});

export const usernameSubmit = () => ({
  type: USERNAME_SUBMIT,
});

export const passwordSubmit = () => ({
  type: PASSWORD_SUBMIT,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginHandler = () => ({
  type: LOGIN_HANDLER,
});

export const logoutHandler = () => ({
  type: LOGOUT_HANDLER,
});

export const saveSession = (session) => ({
  type: SAVE_SESSION,
  session,
});

export const checkConnexion = () => ({
  type: CHECK_CONNEXION,
});
