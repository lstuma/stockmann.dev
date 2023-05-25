import React, { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './article.css';

const fetchPost = async (link) => {
    let text = await fetch(link).then(data => data.text())
    let lines = text.split('\n')
    text = text.slice(text.indexOf('\n', 2))

    return {title: lines[0], markdown: text}
}

const Article = () => {
    const [state, setState] = useState({markdown: "404", title: "404"})
    const [SentRequest, updateSentRequest] = useState(false)
    let { article } = useParams()
    
    useEffect(() => {document.title = "Blog - stockmann.dev";}, [])

    if(!SentRequest) {
        updateSentRequest(true)
        fetchPost(process.env.PUBLIC_URL+"/blog/articles/"+article+".md").then(data => setState({markdown: data.markdown, title: data.title}))
    }
    
    return (
        <>
        <div className="article-banner">
            <h1 className="article-heading">{state.title}</h1>
        </div>
        <div className="container article">
            <div className="article-card" >
                <ReactMarkdown children={state.markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </div>
        </>
    )
}

export default Article