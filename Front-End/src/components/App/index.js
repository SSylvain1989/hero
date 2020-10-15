import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import ClickableElement from '../Game/ClickableElement';

const App = () => (
  <div className="app">
    <Header />
    <ClickableElement />
  </div>
);

export default App;
