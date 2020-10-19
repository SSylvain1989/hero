import { combineReducers } from 'redux';
import navigation from './navigation';
import field from './field';
import signup from './signup';

export default combineReducers({
  navigation,
  field,
  signup,
});
