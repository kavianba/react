import React from 'react';
import  { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
              <button className="ui button primary" 
                      onClick={() => this.props.selectSong(song)}>
                Select
              </button> 
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render () {
    // this.props === { songs: state.songs, selectedSong: state.selectedSong }
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSong 
  // all the functions inside the connect wraps inside another 
  // function which will get called automatically and through it into the dispatch method
  // Remember selectSong is the action creator which will be exposed to component as props.
})(SongList);