import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'

const fetchMeta = async () => {
    let text = await fetch(process.env.PUBLIC_URL+"/blog/articles/meta.csv").then(data => data.text())
    let posts = []

    for(let line of text.split('\n')) {
        let data = line.split(',')
        posts.push({title: data[0], id: data[1], preview: await fetchPreview(data[1])})
    }

    return posts
}

const fetchPreview = async (id) => {
    let text = await fetch(process.env.PUBLIC_URL+"/blog/articles/"+id+".md").then(data => data.text())
    text = text.split('\n')[1]
    return text.slice(0, text.indexOf(' ', 100)) + ".."
}

const Blog = () => {
    const [state, setState] = useState({posts: []})
    const [SentRequest, updateSentRequest] = useState(false)

    if(!SentRequest) {
        updateSentRequest(true)
        fetchMeta().then(data => setState({posts: data}))
    }

    console.log(state.posts)

    // group posts into columns and rows
    let col = 0
    let rows = []
    for(let post of state.posts) {
        if(col===0)
            rows.push([])
        rows[rows.length-1].push(post)
        col = ++col%2
    }

    console.log(rows)

    return (
        <div className="container">
            <h1 className="heading">stockmann.dev</h1>
            {rows.map((row) => (
                <div className="container container-2col">
                    <div className="card-invisible right" style={{maxWidth: "40em", width: "100%", marginBottom: "2em"}}>
                        <Link to={"/blog/read/"+row[0].id} className="link">
                            <img alt="404" className="article-img round img-link" src={process.env.PUBLIC_URL+"/blog/articles/"+row[0].id+".png"}/>
                        </Link>
                        <Link to={"/blog/read/"+row[0].id} className="link">
                            <h2 className="left">{row[0].title}</h2>
                        </Link>
                        <Link to={"/blog/read/"+row[0].id} className="link">
                            <p className="inter bold padding-sides-sm">{row[0].preview}</p>
                        </Link>
                    </div>
                    <div className="card-invisible left" style={{maxWidth: "40em", width: "100%", marginBottom: "2em"}}>
                        <Link to={"/blog/read/"+row[1].id} className="link">
                            <img alt="404" className="article-img round img-link" src={process.env.PUBLIC_URL+"/blog/articles/"+row[1].id+".png"}/>
                        </Link>
                        <Link to={"/blog/read/"+row[1].id} className="link">
                            <h2 className="left">{row[1].title}</h2>
                        </Link>
                        <Link to={"/blog/read/"+row[1].id} className="link">
                            <p className="inter bold">{row[1].preview}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog