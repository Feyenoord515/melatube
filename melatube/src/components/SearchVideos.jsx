import React, { useState } from 'react';
import getYouTubeVideos from './getYouTubeVideos';
import VideoList from './VideoList';

const SearchVideos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const searchVideos = async (query) => {
    const results = await getYouTubeVideos(query);
    setVideos(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchVideos(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="sr-only">
          Buscar videos en YouTube
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar videos en YouTube"
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-white border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Buscar
        </button>
      </form>
      {videos.length > 0 && <VideoList videos={videos} />}
    </div>
  );
};

export default SearchVideos;

