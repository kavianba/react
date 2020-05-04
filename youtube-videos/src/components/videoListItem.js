import React from 'react';

const VideoListItem = (props) => {
  return (
    <li key={props.video.id.videoId} className="list-group-item"
        click={() => props.onVideoSelect(props.video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object"   
               src={props.video.snippet.thumbnails.default.url}
               alt={props.video.snippet.title}/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
           {props.video.snippet.title}
          </h4>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;