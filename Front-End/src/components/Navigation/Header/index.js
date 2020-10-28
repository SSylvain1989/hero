import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.png';

const Header = ({
  isLoged,
  logoutHandler,
  userName,
}) => (
  <div className="header">
    <ul>
      <div className="header__leftside">
        <NavLink
          to="/"
          exact
        >
          <img
            src={logo}
            alt="logo"
          />
        </NavLink>
        <li>
          <NavLink
            to="/liste-des-jeux"
            exact
          >
            Liste des jeux
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/score"
            exact
          >
            Scores
          </NavLink>
        </li>
      </div>
      <div className="header__rightside">
        {isLoged
          ? (
            <>
              <li>
                { userName }
              </li>
              <li>
                <NavLink
                  to="/profil"
                  exact
                >
                  <img
                    src={avatar}
                    alt="avatar"
                  />
                </NavLink>
              </li>
              <li onClick={logoutHandler}><NavLink to="/">Déconnexion</NavLink></li>
            </>
          )
          : (
            <>
              <li>
                <NavLink
                  to="/Connection"
                  exact
                >Connexion
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inscription"
                  exact
                >Créer un compte
                </NavLink>
              </li>
            </>
          )}
      </div>
    </ul>
  </div>
);

Header.propTypes = ({
  isLoged: PropTypes.bool.isRequired,
  logoutHandler: PropTypes.func.isRequired,
  userName: PropTypes.string,
});

Header.defaultProps = ({
  userName: '',
});

export default Header;
