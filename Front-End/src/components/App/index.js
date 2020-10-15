import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import LegalNotices from '../Navigation/LegalNotices';

const App = () => (
  <div className="app">
    <Header />
    <LegalNotices />
  </div>
);

export default App;
