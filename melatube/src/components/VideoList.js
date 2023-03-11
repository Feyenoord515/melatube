// 
import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const VideoList = ({ videos }) => {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState([]);

  const handleVideoLoaded = (index) => {
    setVideoLoaded([...videoLoaded, index]);
    if (videoLoaded.length === videos.length - 1) {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div key={video.id.videoId} className="bg-white rounded-lg shadow-md p-4 text-center">
            <h2 className="text-xl font-bold mb-2">{video.snippet.title}</h2>
            {loading && (
              <div className="flex justify-center items-center h-48">
                <BeatLoader color="#8B5CF6" size={50} />
              </div>
            )}
            <iframe
              width="300"
              height="300"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
              style={{ display: videoLoaded.includes(index) ? 'block' : 'none' }}
              onLoad={() => handleVideoLoaded(index)}
              className={`${loading ? 'hidden' : ''} rounded-md`}
            ></iframe>
            <p className="text-sm mt-2">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
