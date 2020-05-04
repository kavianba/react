import axios from 'axios';

const API_KEY='36cdf802c560185c5754da639610a282';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  return async (dispatch) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request =  await axios.get(url);

    dispatch({ type: FETCH_WEATHER, payload: request.data });
  }
}