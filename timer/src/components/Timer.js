import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      action: 'Start'
    }
  }

  resetTimer = () => {
    clearInterval(this.intervalRef);
    this.setState({
      count: 0,
      action: 'Start'
    });
  }

  tick() {
    this.setState({
      count: this.state.count + 1,
      action: 'Pause'
    });
  }

  toggleTimer = () => {
    if (this.state.action === 'Pause') {
      clearInterval(this.intervalRef);
      this.setState({
        action: 'Start'
      });
    } else {
      this.intervalRef = setInterval(() => this.tick(), 1000);
    }
    
  }

  render() {
    return (
      <div>
        <h3>Timer Application</h3>
        <p>{this.state.count}</p>
        <div className="action-buttons">
          <button onClick={this.toggleTimer} className="btn btn-primary">{this.state.action}</button>
          <button onClick={this.resetTimer} className="btn btn-secondary">Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;