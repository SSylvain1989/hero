// == Import npm
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

// == Import

// == Composant
const Member = () => (
  <div className="member">
    <section>
      <div className="container">
        <div className="card_wrapper">
          <div className="card">
            <img className="card-img" src="https://miro.medium.com/max/1206/0*qQP5Xo1C-qcm7gmz." alt="card bacground" />
            <img src="https://i.picsum.photos/id/775/5616/3744.jpg?hmac=JGK16Mo_qP2KH06G5ZNbsNbGyydrQeh-5XysLyK8DBM" alt="profile" className="profile-img" />
            <h1>Sylvain Sigonnez</h1>
            <p className="job-title">Lead Dev Front</p>
            {/* <p className="about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur magnam facere ipsam tempore sint molestiae. Id quos necessitatibus expedita tenetur ab iure. Asperiores eligendi natus, officiis eos autem quo?
            </p> */}
            <a href="#" className="btn">Contact</a>
            {/* //https://react-icons.github.io/  */}
            <ul className="social-media">
              <li><a href="#"><FaGithub className="social-icon" /></a></li>
              <li><a href="#"><FaLinkedin color="#0073B1" className="social-icon" /></a></li>
              <li><a href="#"><FaTwitter color="#1DA1F2" className="social-icon" /></a></li>
              <li><a href="#"><CgMail color="#EA4335" className="social-icon" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// == Export
export default Member;
