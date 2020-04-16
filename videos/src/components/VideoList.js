import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
  renderVideoList () {
    const videoList = this.props.videos.map((video) => {
      return (
        <VideoItem video={video} 
                   key={video.id.videoId}
                   onVideoSelect={this.props.onVideoSelect}/>
      );
    });

    return videoList;
  }

  render () {
    return (
      <div className="ui relaxed divided list">{this.renderVideoList()}</div>
    );
  }
}

export default VideoList;