import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 8,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
