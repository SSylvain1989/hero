// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import navigationMiddleware from '../middleware/navigationMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import signupMiddleware from '../middleware/signupMiddleware';
import gameMiddleware from '../middleware/gameMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    navigationMiddleware,
    userMiddleware,
    signupMiddleware,
    gameMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
