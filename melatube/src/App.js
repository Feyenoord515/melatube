import React, { useState, useEffect } from 'react';
import './tailwind.css'; 
import axios from 'axios';
import Navbar from './components/Navbar';
import ChannelList from './components/ChannelList';
import SearchVideos from './components/SearchVideos';

const App = () => {
  const [channels, setChannels] = useState([]);

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
      <div className="flex">
        <div className="w-1/4 p-4">
          <SearchVideos />
        </div>
        <div className="w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-2xl font-bold mb-4">Canales para niños</h1>
            <ChannelList channels={channels} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
