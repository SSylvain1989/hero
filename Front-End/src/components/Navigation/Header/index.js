import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({
  isLoged,
  loginHandler,
}) => (
    <div className="header">
      <ul>
        <div className="header__leftside">
          <li>
            <NavLink
              to="/"
              exact
            >
              <img
                src=""
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liste-des-jeux"
              exact
            >
              Liste des jeux
            </NavLink>
          </li>
        </div>
        <div className="header__rightside">
          {isLoged
            ? (
              <li>
                Pseudo
                <NavLink
                  to="/board"
                  exact
                >
                  <img
                    src=""
                    alt="avatar"
                  />
                </NavLink>
                Déconnexion
              </li>
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
                    to="/compte"
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
  loginHandler: PropTypes.func.isRequired,
});

export default Header;
