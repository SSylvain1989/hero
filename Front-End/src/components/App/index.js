import React from 'react';

import './app.scss';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import GamesList from '../Navigation/GamesList';

import ViewOne from "./componants/views/ViewOne";

import { Link, Route, Switch } from "react-router-dom";


// const App = () => (
//   <div className="app">
//     <Header />
//     <GamesList />
//     <Footer />
//   </div>
// );

export default function App() {
  return (
    <div>
      <nav className="header">
        <ul className="header_nav">
          <li>
            <Link to="/gameslist">Liste des jeux</Link>
          </li>
          <li>
            <Link to="/score">LeaderBoard</Link>
          </li>
          <li>
            <Link to="/news">Nouveautés</Link>
          </li>
          <li>
            <Link to="/profil">Pseudo</Link>
          </li>
        </ul>
      </nav>
      <Route path="/gameslist" component={GamesList} />
      <Route path="/score" component={score} />
      <Route path="/news" component={news} />
      <Route path="/profil" component={profil} />
    </div>
  );
}

export default App;
