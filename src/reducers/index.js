import { combineReducers } from 'redux';
import bookReducer from './userReducer';

export default combineReducers({
  books: bookReducer,
});
