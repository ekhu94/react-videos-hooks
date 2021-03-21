import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map(vid => {
        return (
            <VideoItem
                key={vid.id.videoId}
                video={vid}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return (
        <div className="ui relaxed divided list">
            {renderedVideos}
        </div>
    );
};

export default VideoList;