import React from 'react';
import { Route } from 'react-router-dom';

import './app.scss';

// import game
import Battle from '../Game/Battle';
import Choice from '../Game/Choice';
import ClickableElement from '../Game/ClickableElement';
import Discussion from '../Game/Discussion';
import End from '../Game/End';
import Start from '../Game/Start';

// import navigation ** attention IMPORT CONTAINER ET COMPONENT
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import Profile from '../Navigation/Profile';
import Board from '../Navigation/Board';
import Connection from '../Navigation/Connection';
import Contact from '../Navigation/Contact';
import GameDetail from '../../containers/GameDetail';
import GamesList from '../../containers/GamesList';
import Home from '../Navigation/Home';
import LegalNotices from '../Navigation/LegalNotices';
import NotFound from '../Navigation/NotFound';
import Signup from '../../containers/Signup';
import Team from '../Navigation/Team';
// import Profile from '../../containers/Profile';

const App = () => (
  <div className="app">

    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/GamesList">
      <GamesList />
    </Route>

  </div>
);

export default App;
{ /* <Header />
<Battle />
<Choice />
<ClickableElement />
<Discussion />
<End />
<Start />
    <Board />
    <Connection />
    <Contact />
    <GameDetail />
    <GamesList />
    <LegalNotices />
    <NotFound />
    <Profile />
    <Signup />
    <Team />
    <Footer /> */ }
