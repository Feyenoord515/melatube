import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY.slice(1, -2);

const getYouTubeVideos = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=12&key=${API_KEY}`
    );
    console.log(response.data)
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};

export default getYouTubeVideos;
