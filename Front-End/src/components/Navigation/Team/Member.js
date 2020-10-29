// == Import npm
import React from 'react';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { CgMail } from 'react-icons/cg';

// == Import

// == Composant
const Member = ({ fullName, description, role, specialite }) => {
  console.log(fullName, description, role, specialite);

  return (
    <div className="member">
      <section className="member__section">
        <div className="member__container">
          <div className="member__wrapper">
            <div className="member__card">
              <img className="member__imgBgr" src="https://miro.medium.com/max/1206/0*qQP5Xo1C-qcm7gmz." alt="card bacground" />
              <img src="https://i.picsum.photos/id/775/5616/3744.jpg?hmac=JGK16Mo_qP2KH06G5ZNbsNbGyydrQeh-5XysLyK8DBM" alt="profile" className="member__imgProfile" />
              <h1 className="member__name">{fullName}</h1>
              <p className="member__job">{role}</p>
              <p className="member__about">{description}</p>
              <p className="member__about"> spécialité : {specialite}</p>
              <a href="#" className="member__btn">Contact</a>
              {/* //https://react-icons.github.io/  */}
              <ul className="member__social">
                {/* social-media */}
                <li><a href="#"><FaGithub className="member__social-icon" /></a></li>
                <li><a href="#"><FaLinkedin color="#0073B1" className="member__social-icon" /></a></li>
                <li><a href="#"><FaTwitter color="#1DA1F2" className="member__social-icon" /></a></li>
                <li><a href="#"><CgMail color="#EA4335" className="member__social-icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// == Export
export default Member;
