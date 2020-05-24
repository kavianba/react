import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducers from './posts';

export default combineReducers({
  posts: PostReducers,
  form: formReducer
});