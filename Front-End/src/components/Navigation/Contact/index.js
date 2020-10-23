/* eslint-disable react/button-has-type */
import React from 'react';
import emailjs from ‘emailjs-com’;
import apiKeys from ‘../apikeys’;

import './contact.scss';

// J'essaie de suivre cette méthode
// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

// Création d'un fichier Apikey.js dans contact + ajout dans .gitignore.

const Contact = () => (
  // <div className="contact">
  //   <h1>Nous contacter</h1>
  //   <input type="text" placeholder="Votre email" />
  //   <textarea placeholder="Votre message" />
  //   <button type="button">Envoyer</button>
  // </div>

  // eslint-disable-next-line no-undef
  <form className="form" onSubmit ={onSubmit}>
    <p>Your Name:</p>
    <input name="name" type="text" placeholder="name..." className="form__input" />
    <p>Subject:</p>
    <input name="subject" type="text" placeholder="Subject…" className="form__input" />
    <p>Your Message:</p>
    <textarea name="message" type="text" placeholder="Your Message…" className="form__input-message" />
    <button className="form__input — button">Send Message</button>
  </form>
);

// J'ai lancé dans le terminal npm install emailjs-com - save
// Installer la fonction sendMail

const onSubmit=(e)=>{
  e.preventDefault()// Prevents default refresh by the browser
  emailjs.sendForm(‘gmail’, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
  .then(result => {
  alert('Message Sent, I\'ll get back to you shortly', result.text);
  },
  error => {
  alert( 'An error occured, Plese try again',error.text)
  })
  }

export default Contact;
