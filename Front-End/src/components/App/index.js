import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import Profile from '../Navigation/Profile';
// import Profile from '../../containers/Profile';

const App = () => (
  <div className="app">
    <Header />
    <Profile />
    <Footer />
  </div>
);

export default App;
