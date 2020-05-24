import apis from '../apis';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
const API_KEY = '?key=PAPERCLIP1234';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await apis.get(`/posts${API_KEY}`);
    
    dispatch({ type: FETCH_POSTS, payload: response.data });
  }
}

export const createPost = (values, callback) => {
  return async (dispatch) => {
    const response = await apis.post(`/posts${API_KEY}`, values);

    dispatch({ type: CREATE_POST, payload: response.data });
    callback();
  }
}

export const fetchPost = (id) => {
  return async (dispatch) => {
    const response = await apis.get(`/posts/${id}/${API_KEY}`);
    
    dispatch({ type: FETCH_POST, payload: response.data });
  }
}

export const deletePost = (id, callback) => {
  return async (dispatch) => {
    const response = await apis.delete(`/posts/${id}/${API_KEY}`);

    dispatch( {type: DELETE_POST, payload: response.data });
    callback();
  }
}