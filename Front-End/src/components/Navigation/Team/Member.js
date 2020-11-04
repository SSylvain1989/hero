// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

// == Import

// == Composant
const Member = ({
  fullName,
  description,
  role,
  specialite,
  image,
  linkedin,
  email,
  github,
  twitter,
  bgr,
}) => (
    <div className="member">
      <section className="member__section">
        <div className="member__container">
          <div className="member__wrapper">
            <div className="member__card">
              <img className="member__imgBgr" src={bgr} alt="card bacground" />
              <img src={image} alt="profile" className="member__imgProfile" />
              <h1>{fullName}</h1>
              <p className="member__job">{role}</p>
              <p className="member__about">{description}</p>
              <p className="member__about"> Spécialité : {specialite}</p>
              <ul className="member__social">
                <li><a href={github} alt="github"><FaGithub className="member__social-icon" /></a></li>
                <li><a href={linkedin} alt="linkedin"><FaLinkedin color="#0073B1" className="member__social-icon" /></a></li>
                {(twitter !== '') && <li><a href={twitter} alt="twitter"><FaTwitter color="#1DA1F2" className="member__social-icon" /></a></li>}
                <li><a href={`mailto:${email}`} alt="email"><CgMail color="#EA4335" className="member__social-icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

Member.propTypes = ({
  fullName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  specialite: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  bgr: PropTypes.string.isRequired,
});

// == Export
export default Member;
