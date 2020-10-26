/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from 'react';
import emailjs from 'emailjs-com';
import apiKeys from 'src/components/Navigation/Contact/apikey';

import './contact.scss';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = () => {
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
  //     .then((result) => {
  //       alert('Message envoyé, nous reviendrons bientot vers vous', result.text);
  //     },
  //     (error) => {
  //       alert('Une erreur est apparu. Ré-essayez s\'il vous plait', error.text);
  //     });
  // };

  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
    const form = {
      name: 'toto', subject: 'test toto', message: 'toto text',
    };

    console.log('e', e);
    console.log('form', form);
    emailjs.send('default_service', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID)
      .then((result) => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
      },
      (error) => {
        alert('An error occured, Please try again', error.text);
      });
  };

  return (
    <form className="contact" onSubmit={onSubmit}>
      <h1>Nous contacter</h1>
      <input name="email" type="text" placeholder="Votre email" className="contact__input" />
      <textarea name="message" type="text" placeholder="Votre message ..." className="contact__input-message" />
      <button className="contact__input — button">Envoyer</button>
    </form>
  );
};

export default Contact;
