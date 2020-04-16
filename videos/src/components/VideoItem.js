import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {

  render () {
    return (
      <div className="item video-item" onClick={() => { this.props.onVideoSelect(this.props.video); }}>
        <img src={this.props.video.snippet.thumbnails.medium.url}
             alt={this.props.video.snippet.title}
             className="ui image"/>
        <div className="content">
          <div className="header">
            {this.props.video.snippet.title}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItem;