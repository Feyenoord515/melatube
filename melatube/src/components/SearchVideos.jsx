import React, { useState } from 'react';
import getYouTubeVideos from './getYouTubeVideos';

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
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center my-8">
        <label htmlFor="searchInput" className="sr-only">
          Buscar videos en YouTube
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar videos en YouTube"
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mr-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Buscar
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-2">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-lg font-bold mb-2">{video.snippet.title}</h2>
            <div className="h-48 mb-4">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-700 text-sm">{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchVideos;

