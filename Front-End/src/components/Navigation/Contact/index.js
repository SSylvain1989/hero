import React, {useState} from 'react';
import axios from 'axios';

import './contact.scss';

const Contact = () => (
  <div className="contact">
    <h1>Nous contacter</h1>
    <input type="text" placeholder="Votre email" />
    <textarea placeholder="Votre message" />
    <button type="button">Envoyer</button>
  </div>
);

export default Contact;
