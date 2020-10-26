/* eslint-disable react/button-has-type */
import React from 'react';
import emailjs from 'emailjs-com';
import apiKeys from 'src/components/Navigation/Contact/apikey';

import './contact.scss';

// J'essaie de suivre cette méthode
// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

// Création d'un fichier Apikey.js dans contact + ajout dans .gitignore.

const Contact = () => {
  // <div className="contact">
  //   <h1>Nous contacter</h1>
  //   <input type="text" placeholder="Votre email" />
  //   <textarea placeholder="Votre message" />
  //   <button type="button">Envoyer</button>
  // </div>
  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
    emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then((result) => {
        alert('Message envoyé, nous revenons vers vous bientot ', result.text);
      },
      (error) => {
        alert('Une erreur est apparu. Ré-essayez s\'il vous plait', error.text);
      });
  };

  // eslint-disable-next-line no-undef
  return (
    <form className="contact" onSubmit={onSubmit}>
      <h1>Nous contacter</h1>
      <p>Votre nom</p>
      <input name="name" type="text" placeholder="name..." className="contact__input" />
      <p>Votre sujet</p>
      <input name="subject" type="text" placeholder="Subject…" className="contact__input" />
      <p>Votre message</p>
      <textarea name="message" type="text" placeholder="Your Message…" className="contact__input-message" />
      <button className="contact__input — button">Envoyer</button>
    </form>
  );
};

// J'ai lancé dans le terminal npm install emailjs-com - save
// Installer la fonction sendMail

export default Contact;
