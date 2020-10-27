/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';
import Field from '../../common/Field';

import './contact.scss';
import logo from 'src/images/logo.png';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = ({
  email,
  message,
  changeField,
  response,
}) => {
  const onSubmit = (e) => {
    console.log('je suis la');
    e.preventDefault();// Prevents default refresh by the browser
    console.log('Et je suis rela');
    console.log(email);
    console.log(message);
    const form = {
      // les attributs name & message sont identiques aux attributs du template du mail de emailJs
      name: email, message,
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
          <img className="contact_picture" src={logo} alt="logo" />
          <form className="contact_form" onSubmit={onSubmit}>
            <h1>Nous contacter</h1>
            <Field
              className="contact_email"
              name="email"
              type="email"
              value={email}
              onChange={changeField}
              placeholder="Votre email"
            />
            <Field
              name="message"
              value={message}
              onChange={changeField}
              type="text"
              placeholder="Votre message ..."
              className="contact_input--message"
            />
            <button className="contact_button">Envoyer</button>
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
