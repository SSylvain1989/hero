/* eslint-disable react/button-has-type */
import React from 'react';

import './contact.scss';

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

export default Contact;
