import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import GamesList from '../Navigation/GamesList';

const App = () => (
  <div className="app">
    <Header />
    <GamesList />
    <Footer />
  </div>
);

export default App;
