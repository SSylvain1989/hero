import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

import Battle from '../Game/Battle';
import Choice from '../Game/Choice';
import ClickableElement from '../Game/ClickableElement';
import Discussion from '../Game/Discussion';
import End from '../Game/End';

// import navigation ** attention IMPORT CONTAINER ET COMPONENT
import Header from '../../containers/Header';
import Footer from '../Navigation/Footer';
import Team from '../Navigation/Team';
import Profile from '../../containers/Profile';
import Connection from '../../containers/Connection';
import Board from '../Navigation/Board';
import Contact from '../Navigation/Contact';
import GameDetail from '../../containers/GameDetail';
import GamesList from '../../containers/GamesList';
import Home from '../Navigation/Home';
import LegalNotices from '../Navigation/LegalNotices';
import NotFound from '../Navigation/NotFound';
import Signup from '../../containers/Signup';
import Start from '../../containers/Start';
import story from '../../data/histoire1';

// **** inscription à modifier pour la route signup ****
const App = ({ games, checkConnexion }) => {
  useEffect(() => {
    checkConnexion();
  }, []);

  const displayGoodScene = (scene) => {
    switch (scene.details_scene.scene_type) {
      case 'Début':
        return <Start />;
      case 'Choix':
        return <Choice />;
      case 'Cliquable':
        return <ClickableElement />;
      case 'Combat':
        return <Battle />;
      case 'Fin':
        return <End />;
      default:
        return null;
    }
  };
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/connection">
          <Connection />
        </Route>
        <Route exact path="/inscription">
          <Signup />
        </Route>
        <Route exact path="/liste-des-jeux">
          <GamesList />
        </Route>
        {games.map((game) => (
          <Route key={game.id} exact path={`/liste-des-jeux/${game.id}`}>
            <GameDetail gameId={game.id} />
          </Route>
        ))}
        {story.history ? (
          story.history.scene_list.map((scene) => (
            <Route key={scene.details_scene.scene_id} exact path={`/liste-des-jeux/${story.history.history_id}/${scene.details_scene.scene_id}`}>
              {displayGoodScene(scene)}
            </Route>
          ))) : (null)}
        <Route exact path="/teststart">
          <Start />
        </Route>
        <Route exact path="/score">
          <Board />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/profil">
          <Profile />
        </Route>
        <Route exact path="/equipe">
          <Team />
        </Route>
        <Route exact path="/mentions-legales">
          <LegalNotices />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = ({
  games: PropTypes.array.isRequired,
  checkConnexion: PropTypes.func.isRequired,
  story: PropTypes.object.isRequired,
});

export default App;
