import React from 'react';
import Basic from './components/Basic';
import BasicII from './components/BasicII';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import './App.css';

const App = () => {
  return (
    <div>
      <h4>D3-Charts</h4>
      <LineChart/>
      <BarChart/>
    </div>
  );
}

export default App;