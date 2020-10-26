/* eslint-disable no-alert */
/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';
import Field from '../../common/Field';

import './contact.scss';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = ({
  email,
  message,
  changeField,
  response,
}) => {
  const onSubmit = (e) => {
    console.log('je suis laf');
    e.preventDefault();// Prevents default refresh by the browser
    console.log('je suis la');
    const form = {
      name: 'toto', subject: 'test toto', message: 'toto text',
    };

    // console.log('e', e);
    // console.log('form', form);
    emailjs.send('default_service', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID)
      .then((result) => {
        alert('Votre message a bien été envoyé, nous vous répondrons sous peu', result.text);
        console.log(result);
      },
      (error) => {
        alert('Une erreur est apparue, retentez votre envoi s\'il-vous-plait', error.text);
      });
  };
  if (!response) {
    return (
      <div className="contact_container">
        <div className="contact_wrap">
          <img className="contact_picture" alt="IMG" />
          <form className="contact_form" onSubmit={onSubmit}>
            <h1>Nous contacter</h1>
            <Field
              name="email"
              type="email"
              value={email}
              onChange={changeField}
              placeholder="Votre email"
              className="contact_input--email"
            />
            <Field
              name="message"
              value={message}
              onChange={changeField}
              type="text"
              placeholder="Votre message ..."
              className="contact_input--message"
            />
            <button type="button" className="contact_input--button">Envoyer</button>
          </form>
        </div>
      </div>
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
