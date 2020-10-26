import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';

import './contact.scss';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = ({
  email,
  message,
  changeField,
  handleContact,
  response,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
    handleContact();
    const form = {
      name: 'toto', subject: 'test toto', message: 'toto text',
    };

    // console.log('e', e);
    // console.log('form', form);
    emailjs.send('default_service', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID)
      .then((result) => {
        // eslint-disable-next-line no-alert
        alert('Votre message a bien été envoyé, nous vous répondrons sous peu', result.text);
      },
      (error) => {
        // eslint-disable-next-line no-alert
        alert('Une erreur est apparue, retentez votre envoi s\'il-vous-plait', error.text);
      });
  };
  if (!response) {
    return (
      <form className="contact" onSubmit={onSubmit}>
        <h1>Nous contacter</h1>
        <input name="email" type="text" value={email} onChange={changeField} placeholder="Votre email" className="contact__input" />
        <textarea name="message" value={message} onChange={changeField} type="text" placeholder="Votre message ..." className="contact__input-message" />
        <button type="button" className="contact__input — button">Envoyer</button>
      </form>
    );
  }
};

Contact.propTypes = ({
  email: PropTypes.string,
  message: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleContact: PropTypes.func.isRequired,
  response: PropTypes.object,
});

Contact.defaultProps = ({
  email: '',
  message: '',
  response: '',
});

export default Contact;
