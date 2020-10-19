import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({
  isLoged,
  loginHandler,
}) => (
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
        { isLoged
          ? (
            <li>
              Pseudo
              <img
                src=""
                alt="avatar"
              />
              Déconnexion
            </li>
          )
          : <li>Connexion</li>}
      </div>
    </ul>
  </div>
);

Header.propTypes = ({
  isLoged: PropTypes.bool.isRequired,
  loginHandler: PropTypes.func.isRequired,
});

export default Header;
