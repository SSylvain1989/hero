import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Footer = () => (
  <footer className="footer">
    <ul>
      <li><NavLink to="/equipe">L'équipe</NavLink></li>
      <li><NavLink to="/mentions-legales">Mentions légales</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </footer>
);

export default Footer;
