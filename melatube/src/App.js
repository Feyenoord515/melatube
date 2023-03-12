import React, { useState, useEffect } from 'react';
import './tailwind.css'; 
import axios from 'axios';
import Navbar from './components/Navbar';
import ChannelList from './components/ChannelList';
import SearchVideos from './components/SearchVideos';
// import VideoList from './components/VideoList';




console.log(process.env.REACT_APP_API_KEY)

const apiKey = process.env.REACT_APP_API_KEY.slice(1, -2);
const App = () => {
  const [channels, setChannels] = useState([]);
  // const [videos, setVideos] = useState([]);
  console.log(apiKey)
  
  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'canales para niños',
        type: 'channel',
        maxResults: 12,
        key: apiKey,
      },
    })
      .then(response => {
        setChannels(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const handleSearchVideos = (query) => {
  //   // buscar videos con la consulta proporcionada
  //   axios.get('https://www.googleapis.com/youtube/v3/search', {
  //     params: {
  //       part: 'snippet',
  //       q: query,
  //       type: 'video',
  //       maxResults: 10,
  //       key: 'AIzaSyChHbmgbhUd0OeXvG_RLnLSAaSQP7J7HXo',
  //     },
  //   })
  //     .then(response => {
  //       setVideos(response.data.items);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };


  return (
    // <
    <div className="bg-pink-200 min-h-screen">
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 py-4">
      <h1 className="text-white text-5xl font-extrabold text-center font-custom">
        Mel<span className="text-purple-300">a</span>Tub<span className="text-pink-300">e</span>
      </h1>
    </header>
    <Navbar />
    <div className="flex flex-col h-full">
        <div className="flex-grow flex items-center justify-center w-full">
          <SearchVideos />
        </div>
        <div className="overflow-x-auto flex-grow-0 h-58">
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
