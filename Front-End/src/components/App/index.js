import React from 'react';

import './app.scss';
import Header from '../../containers/Header';
import Footer from '../Navigation/Footer';
// import Connection from '../Navigation/Connection';
import Connection from '../../containers/Connection';

const App = () => (
  <div className="app">
    <Header />
    <Connection />
    <Footer />
  </div>
);

export default App;
