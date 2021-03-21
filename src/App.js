import youtube from './apis/youtube';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('react js');
    }, []);

    const onSearchSubmit = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(res.data.items);
        setSelectedVideo(res.data.items[0]);
    };

    const onVideoSelect = video => {
        setSelectedVideo(video);
    };

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
                            onVideoSelect={onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;