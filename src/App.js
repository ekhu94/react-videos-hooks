import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

export default App;