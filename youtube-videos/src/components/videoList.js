import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} onVideoSelect={props.onVideoSelect}/>
  });

  if(!props.videos) {
    return <div>Loading...</div>
  }

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;