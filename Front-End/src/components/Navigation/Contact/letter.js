import React from 'react';

import './letter.scss';

const Letter = (
  <div className="letter-image">
    <div className="animated-mail">
      <div className="back-fold" />
      <div className="letter">
        <div className="letter-border" />
        <div className="letter-title" />
        <div className="letter-context" />
        <div className="letter-stamp">
          <div className="letter-stamp-inner" />
        </div>
      </div>
      <div className="top-fold" />
      <div className="body" />
      <div className="left-fold" />
    </div>
    <div className="shadow" />
  </div>
);

export default Letter;
