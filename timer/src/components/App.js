import React from 'react';
import Timer from './Timer';

import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Timer/>
      </div>
    );
  }
}

export default App;