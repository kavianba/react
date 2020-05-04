import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import './style/style.css';
const API_KEY='AIzaSyDFWdZl-GuQQOGW3SV_AkStyrU2D8wlUSs';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  constructor(props) {
    super(props);

    this.videoSearch('leaves');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (data) =>  {
      this.setState({ 
        videos: data,
        selectedVideo: data[0]
      });
      console.log(this.state.videos);
    });
  }

  render () {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);
    
    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos}
                     onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);