import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './blog.css';

import BlogPreviewFull from '../../api/blog/BlogPreviewFull'

const Blog = () => {
    useEffect(() => {document.title = "Blog - stockmann.dev";}, [])


    return (
        <div id="content">
            <h1 className="heading">Articles</h1>
            <BlogPreviewFull />
        </div>
    )
}

export default Blog