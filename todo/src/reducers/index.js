import { combineReducers } from "redux";

export const itemsReducers = function(state = [], action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'MARK_COMPLETE':
    case 'MARK_UNCOMPLETE':
      return [...action.payload];
    default:
      return state;
  }
}

export const filterReducers = function(state, action) {
  switch(action.type) {
    case 'FILTER':
      return action.payload;
    default:
      return 'ALL';
  }
}

export default combineReducers({
  items: itemsReducers,
  filter: filterReducers
})
