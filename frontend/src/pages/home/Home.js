import React, { useEffect } from 'react';
import './home.css';

import BlogPreview from '../../api/blog/BlogPreview'

const Home = () => {
    useEffect(() => {document.title = "stockmann.dev";}, [])

    return <div id="content">
        <h1 className="heading">Featured Blog Articles</h1>
        <BlogPreview id={0}/>
        <BlogPreview id={1}/>
    </div>
}

export default Home