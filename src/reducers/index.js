import { combineReducers } from 'redux';
import TextReducer from './reducer_text'
const rootReducer = combineReducers({
  text: TextReducer
});

export default rootReducer;
