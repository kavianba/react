import axios from 'axios';

const KEY = 'AIzaSyBl8azs8AmOZKrPZQPC4MlwMgV3RLqNX6w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})