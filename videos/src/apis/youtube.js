import axios from 'axios';

const KEY = 'AIzaSyDFWdZl-GuQQOGW3SV_AkStyrU2D8wlUSs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})