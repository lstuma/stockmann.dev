import React, { useEffect } from 'react';
import { IoMdRocket } from 'react-icons/io'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import random from 'random'
import './article.css';

import { LoremIpsumText } from '../../components/loremipsum/LoremIpsumText'
import { fetchPost } from '../../api/blog/fetchPost'

const Article = () => {
    const [state, setState] = useState({markdown: false, title: false})
    const [SentRequest, updateSentRequest] = useState(false)
    let { article } = useParams()
    
    useEffect(() => {document.title = "Blog - stockmann.dev";}, [])

    if(!SentRequest) {
        updateSentRequest(true)
        setTimeout(() => {
            fetchPost(process.env.PUBLIC_URL+"/blog/articles/"+article+".md").then(data => { if(data.title==="404") return; setState({markdown: data.markdown, title: data.title})})
            }, 500);
    }
    
    return (
        <div id="content">
            {state.title?
                <>
                    <h1 className="heading">{state.title}</h1>
                    <form action={"./"+article} method="POST" netlify data-netlify="true">
                        <button type="submit" name="fire" value="1" id="fire-button"><IoMdRocket className="icon"/></button>
                    </form>
                    <div className="container article">
                        <div className="article" >
                            <ReactMarkdown children={state.markdown} remarkPlugins={[remarkGfm]} />
                        </div>
                    </div>
                </>
            :
                <>
                    <h1 className="heading loading-text">{LoremIpsumText(30)}</h1>
                    <div className="container article">
                        <div className="article" >
                            {(Array.from({length: random.int(3,6)},(_,i) =>
                                <>
                                    <h2 className="loading-text" key={i*2}>{LoremIpsumText(random.int(20, 40))}</h2>
                                    <p className="loading-text" key={i*2+1}>{LoremIpsumText(random.int(100, 800))}</p>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Article