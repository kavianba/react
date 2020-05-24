import React from 'react';
import Todo from './Todo';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Todo/>
      </div>
    )
  }
}

export default App;