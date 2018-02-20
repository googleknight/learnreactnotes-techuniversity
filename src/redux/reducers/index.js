import { combineReducers } from 'redux';
import navigation from './navigation';
import notes from './notes';

export default combineReducers({
  notes, navigation,
});
