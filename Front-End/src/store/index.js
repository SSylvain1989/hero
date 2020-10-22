// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import navigationMiddleware from '../middleware/navigationMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import signupMiddleware from '../middleware/signupMiddleware';
import gameMiddleware from '../middleware/gameMiddleware';
import contactMiddleware from '../middleware/contactMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    // secondMiddleware,
    navigationMiddleware,
    userMiddleware,
    signupMiddleware,
    gameMiddleware,
    contactMiddleware,
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
