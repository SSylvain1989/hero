import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import Test from '../Navigation/Team';

const App = () => (
  <div className="app">
    <Header />
    <Test />
    <Footer />
  </div>
);

export default App;
