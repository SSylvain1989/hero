export const EMAIL_SUBMIT = 'EMAIL_SUBMIT';
export const USERNAME_SUBMIT = 'USERNAME_SUBMIT';
export const PASSWORD_SUBMIT = 'PASSWORD_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_HANDLER = 'LOGIN_HANDLER';
export const LOGOUT_HANDLER = 'LOGOUT_HANDLER';
export const SAVE_SESSION = 'SAVE_SESSION';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';
export const CHECK_CONNEXION = 'CHECK_CONNEXION';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SHOW_MODAL_TOOGLE = 'SHOW_MODAL_TOOGLE';
export const HANDLE_ACCOUNT_DELETION = 'HANDLE_ACCOUNT_DELETION';
export const ADD_PROFILE_ERROR_MESSAGE = 'ADD_PROFILE_ERROR_MESSAGE';

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

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});

export const checkConnexion = () => ({
  type: CHECK_CONNEXION,
});

export const loginError = (message) => ({
  type: LOGIN_ERROR,
  message,
});

export const showModalToggle = () => ({
  type: SHOW_MODAL_TOOGLE,
});

export const handleAccountDeletion = (showModal) => ({
  type: HANDLE_ACCOUNT_DELETION,
  showModal,
});

export const addProfileErrorMessage = (errorMessage) => ({
  type: ADD_PROFILE_ERROR_MESSAGE,
  errorMessage,
});
