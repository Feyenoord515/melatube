import React, { useState, useEffect } from 'react';
import getYouTubeVideos from './getYouTubeVideos';
import './tailwind.css'; 
import axios from 'axios';
import Navbar from './components/Navbar';
import ChannelList from './components/ChannelList';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [channels, setChannels] = useState([]);


  const searchVideos = async (query) => {
    const videos = await getYouTubeVideos(query);
    setVideos(videos);
  };

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
    <div>
      <Navbar />
    <div className="container mx-auto p-4">
    <ChannelList channels={channels} />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {channels.map((channel) => (
        <div key={channel.id.channelId} className="border border-gray-300 p-4 rounded">
      <a href={`https://www.youtube.com/channel/${channel.id.channelId}`} target="_blank" rel="noopener noreferrer">
        <img
          src={channel.snippet.thumbnails.medium.url}
          alt={channel.snippet.title}
          className="w-full h-48 object-cover rounded mb-2"
          />
        <h2 className="text-xl font-bold mb-2">{channel.snippet.title}</h2>
        <p className="text-gray-700">{channel.snippet.description}</p>
      </a>
    </div>
  ))}
   </div>
    */}
   
    
  </div>
    <div> 
       
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
      </div>
  );
};

export default App;
