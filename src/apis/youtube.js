import axios from 'axios';

const KEY = 'AIzaSyBPy9ZeMXTfrunqyyV5NoA3cHC6WP1MCfs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});