import axios from 'axios';

const API_KEY = 'AIzaSyChHbmgbhUd0OeXvG_RLnLSAaSQP7J7HXo';

const getYouTubeVideos = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=10&key=${API_KEY}`
    );
    console.log(response.data)
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};

export default getYouTubeVideos;
