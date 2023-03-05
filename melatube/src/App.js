import React, { useState, useEffect } from 'react';
// import getYouTubeVideos from './getYouTubeVideos';
import './tailwind.css'; 
import axios from 'axios';
import Navbar from './components/Navbar';
import ChannelList from './components/ChannelList';
import SearchVideos from './components/SearchVideos';

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [channels, setChannels] = useState([]);


  // const searchVideos = async (query) => {
  //   const videos = await getYouTubeVideos(query);
  //   setVideos(videos);
  // };

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'canales para niños',
        type: 'channel',
        maxResults: 10,
        key: 'AIzaSyChHbmgbhUd0OeXvG_RLnLSAaSQP7J7HXo',
      },
    })
      .then(response => {
        setChannels(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-pink-200">
      <Navbar />
      <SearchVideos />
    <div className="container mx-auto p-4">
    <ChannelList channels={channels} />   
  </div>
    {/* <div> 
       
      <input type="text" onChange={(e) => searchVideos(e.target.value)} />
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            allowFullScreen
            ></iframe>
        </div>
      ))}
    </div>
      */}
      </div>
  );
};

export default App;
