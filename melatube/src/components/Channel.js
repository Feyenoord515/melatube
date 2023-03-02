import React from 'react';

const Channel = ({ channel }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{channel.snippet.title}</h2>
        <p className="text-gray-700 text-base">{channel.snippet.description}</p>
        <a href={`https://www.youtube.com/channel/${channel.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold mt-2 hover:text-blue-700">Ver en YouTube</a>
      </div>
    </div>
  );
};

export default Channel;
