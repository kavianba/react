import React from 'react';

class SearchBar extends React.Component {
  state = {term : ''};
  
  render () {
    return (
      <div className="search-bar">
          <input type="text"
                 value={this.state.value}
                 onChange={this.onInputChange}/>
      </div>
    );
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.onSearchTermChange(this.state.term);
  }
};

export default SearchBar;