import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions';

class SearcBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({
      term : event.target.value
    })
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render () {
    return (
      <div>
        <form className="input-group" 
                   onSubmit={this.onFormSubmit}>
          <input type="text" 
                 placeholder="Get a five-day forecast in your favorite cities"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}/>
          <span className="input-group-btn">
           <button className="btn btn-primary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchWeather })(SearcBar);