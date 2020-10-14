import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import Accueil from '../Navigation/Accueil';

const App = () => (
  <div className="app">
    <Header />
    <Accueil />
  </div>
);

export default App;
