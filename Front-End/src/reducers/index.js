import { combineReducers } from 'redux';
import navigation from './navigation';
import field from './field';
import signup from './signup';
import game from './game';

export default combineReducers({
  navigation,
  field,
  signup,
  game,
});
