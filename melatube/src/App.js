import React, { useState } from 'react';
import getYouTubeVideos from './getYouTubeVideos';

const App = () => {
  const [videos, setVideos] = useState([]);

  const searchVideos = async (query) => {
    const videos = await getYouTubeVideos(query);
    setVideos(videos);
  };

  return (
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
  );
};

export default App;
