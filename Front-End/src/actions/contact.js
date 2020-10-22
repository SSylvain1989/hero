export const CONTACT = 'CONTACT';
export const CONTACT_RESPONSE = 'CONTACT_RESPONSE';

export const contact = () => ({
  type: CONTACT,
});

export const contactResponse = (response) => ({
  type: CONTACT_RESPONSE,
  response,
});
