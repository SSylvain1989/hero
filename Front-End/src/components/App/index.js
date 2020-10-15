import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import GameDetail from '../Navigation/GameDetail';

const App = () => (
  <div className="app">
    <Header />
    <GameDetail />
  </div>
);

export default App;
