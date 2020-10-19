import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import GameDetail from '../../containers/GameDetail';

const App = () => (
  <div className="app">
    <Header />
    <GameDetail />
    <Footer />
  </div>
);

export default App;
