import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID nCtkTSR5uD6D-_QLC7aV61oJ8bJfRWLAQWkMtx0Bu_c'
  }
}); 