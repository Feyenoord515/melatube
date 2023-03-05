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
    // <
    <div className="bg-pink-200 min-h-screen">
      <header className="bg-pink-500 text-white py-4">
        <h1 className="text-center font-bold text-2xl">Mi aplicación para niños</h1>
      </header>
      <Navbar />
      <div className="flex flex-col md:flex-row md:justify-center md:items-start md:mx-4">
        <div className="w-full md:w-1/2 p-4">
          <SearchVideos />
        </div>
        <div className="w-full border-l-2 border-gray-300 md:w-1/2 p-4">
          <ChannelList channels={channels} />
        </div>
      </div>
      <footer className="bg-pink-500 text-white py-4">
        <p className="text-center">&copy; 2023 Mi aplicación para niños</p>
      </footer>
    </div>
  );
};
  

export default App;
