import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    setSelectedVideo(res.data.items[0]);

    return (
        <div className="ui container">
            <SearchBar
                onSearchSubmit={onSearchSubmit}
            />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail
                            video={selectedVideo}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;