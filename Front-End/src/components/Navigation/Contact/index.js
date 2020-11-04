/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';
import Field from '../../common/Field/FieldTextArea';
import './contact.scss';
import logo from 'src/images/logo.png';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = ({
  email,
  message,
  changeField,
  resetFields,
}) => {
  useEffect(() => {
    resetFields();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
    const form = {
      // les attributs name & message sont identiques aux attributs du template du mail de emailJs
      name: email, message,
    };

    emailjs.send('default_service', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID)
      .then((result) => {
        alert('Votre message a bien été envoyé, nous vous répondrons sous peu', result.text);
        resetFields();
      },
        (error) => {
          alert('Une erreur est apparue, retentez votre envoi s\'il-vous-plait', error.text);
        });
  };
  return (
    <div className="contact">
      <div className="contact__wrap">
        <img className="contact__picture" src={logo} alt="logo" />
        <form className="contact__form" onSubmit={onSubmit}>
          <h1 className="contact__title">Nous contacter</h1>
          <Field
            name="email"
            placeholder="Votre email"
            onChange={changeField}
            value={email}
            type="email"
            className="contact__email"
          />
          <Field
            name="message"
            placeholder="Votre message"
            onChange={changeField}
            value={message}
            type="text"
            className="contact__message"
          />
          <button className="contact__button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = ({
  email: PropTypes.string,
  message: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
});

Contact.defaultProps = ({
  email: '',
  message: '',
});

export default Contact;
