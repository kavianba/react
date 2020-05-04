import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './weatherList';

const App = () => {
  return (
    <div className="container">
      <SearchBar/>
      <WeatherList/>
    </div>
  )
};

export default App;