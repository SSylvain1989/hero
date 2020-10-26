export const CONTACT = 'CONTACT';
export const CONTACT_RESPONSE = 'CONTACT_RESPONSE';
export const CONTACT_ERROR = 'CONTACT_ERROR';

export const contact = () => ({
  type: CONTACT,
});

export const contactResponse = (response) => ({
  type: CONTACT_RESPONSE,
  response,
});

export const contactError = (email) => ({
  type: CONTACT_ERROR,
  email,
});
