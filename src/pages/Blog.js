import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './blog.css';

export const fetchMeta = async () => {
    let text = await fetch(process.env.PUBLIC_URL+"/blog/articles/meta.csv").then(data => data.text())
    let posts = []

    for(let line of text.split('\n')) {
        let data = line.split(',')
        posts.push({title: data[0], id: data[1], preview: data[2]})
    }

    return posts.reverse()
}

const Blog = () => {
    const [state, setState] = useState({posts: []})
    const [SentRequest, updateSentRequest] = useState(false)

    if(!SentRequest) {
        updateSentRequest(true)
        fetchMeta().then(data => setState({posts: data}))
    }

    useEffect(() => {document.title = "Blog - stockmann.dev";}, [])

    // group posts into columns and rows
    let col = 0
    let rows = []
    for(let post of state.posts) {
        if(col===0)
            rows.push([])
        rows[rows.length-1].push(post)
        col = ++col%2
    }

    return (
        <div className="container padding-sides-sm no-mobile-padding center">
            <h1 className="heading">stockmann.dev</h1>
            {rows.map((row) => (
                <div className="container container-2col">
                    <div className="card-invisible blog-article-card right" style={{width: "100%", marginBottom: "2em"}}>
                        <Link to={"/blog/read/"+row[0].id} className="link">
                            <img alt="404" className="article-img round img-link" src={process.env.PUBLIC_URL+"/img/articles/"+row[0].id+".webp"}
                                onError={(e) => {e.target.onerror=null; e.target.src=process.env.PUBLIC_URL+"/img/articles/default_cover.webp"}}/>
                        </Link>
                        <Link to={"/blog/read/"+row[0].id} className="link">
                            <h2 className="left mobile-padding-sides-sm no-mobile-padding-sides blog-article-title">{row[0].title}</h2>
                        </Link>
                        <Link to={"/blog/read/"+row[0].id} className="link">
                            <p className="inter bold mobile-padding-sides-sm no-mobile-padding-sides blog-article-preview">{row[0].preview}</p>
                        </Link>
                    </div>
                    {row.length>1?
                    <div className="card-invisible blog-article-card left" style={{width: "100%", marginBottom: "2em"}}>
                        <Link to={"/blog/read/"+row[1].id} className="link">
                            <img alt="404" className="article-img round img-link" src={process.env.PUBLIC_URL+"/img/articles/"+row[1].id+".webp"}
                                onError={(e) => {e.target.onerror=null; e.target.src=process.env.PUBLIC_URL+"/img/articles/default_cover.webp"}}/>
                        </Link>
                        <Link to={"/blog/read/"+row[1].id} className="link">
                            <h2 className="left mobile-padding-sides-sm no-mobile-padding-sides blog-article-title">{row[1].title}</h2>
                        </Link>
                        <Link to={"/blog/read/"+row[1].id} className="link">
                            <p className="inter bold mobile-padding-sides-sm no-mobile-padding-sides blog-article-preview">{row[1].preview}</p>
                        </Link>
                    </div>:""}
                </div>
            ))}
        </div>
    )
}

export default Blog