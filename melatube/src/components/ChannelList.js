import React from 'react';
import Channel from './Channel';

const ChannelList = ({ channels }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {channels.map((channel) => (
        <div key={channel.id} className="bg-white rounded shadow">
          <Channel channel={channel} className="h-32 p-4" />
        </div>
      ))}
    </div>
  );
};

export default ChannelList;

