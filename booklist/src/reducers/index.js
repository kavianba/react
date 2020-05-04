import { combineReducers } from 'redux';

const booksReducers = function() {
  return [
    { title: 'Javascript', id: 1 },
    { title: 'React', id: 2 },
    { title: 'Angular', id: 3 },
    { title: 'Vue', id: 4 },
  ]
}

const selectBookReducers = (state = null, action) => {
  switch(action.type) {
    case 'SELECTED_BOOK':
      return action.payload 
    default:
      return state;
  }
}

export default combineReducers({
  books: booksReducers,
  activeBook: selectBookReducers
});