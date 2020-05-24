import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_POST:
      /*const post = action.payload;
      const newState = {...state};
      newState[post.id] = post;
      return newState;*/
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default PostsReducer;