import React from 'react';

import './app.scss';
// import Header from '../Navigation/Header';
//import GamesList from '../Navigation/GamesList';
// import Contact from '../Navigation/Contact';
// import LegalNotices from '../Navigation/LegalNotices';
// import GameDetail from '../Navigation/GameDetail';
//import Footer from '../Navigation/Footer';
import GamesListAll from '../Navigation/GamesList/gamesList';

const App = () => (
  <div className="app">
    <GamesListAll />
  </div>
);

export default App;
