import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <ul>
      <div className="header__leftside">
        <li>
          <img
            src=""
            alt="logo"
          />
        </li>
        <li>Liste des jeux</li>
        <li>LeaderBoard</li>
        <li>Nouveautés</li>
      </div>
      <div className="header__rightside">
        <li>
          Pseudo
          <img
            src=""
            alt="avatar"
          />
        </li>
      </div>
    </ul>
  </div>
);

export default Header;
