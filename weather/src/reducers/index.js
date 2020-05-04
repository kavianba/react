import { combineReducers } from "redux";
import { FETCH_WEATHER } from "../actions";

export const weatherReducers = (state = [], action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default: 
      return state;
  }
}

export default combineReducers({
  weather: weatherReducers
});