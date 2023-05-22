import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'

const fetchMeta = async () => {
    let text = await fetch(process.env.PUBLIC_URL+"/blog/articles/meta.csv").then(data => data.text())

    let posts = []

    for(let line of text.split('\n'))
        for(let data in line.split(','))
            posts.push()

    return posts
}
const Blog = () => {
    const [state, setState] = useState({posts: undefined})
    const [SentRequest, updateSentRequest] = useState(false)
    let { article } = useParams()

    if(!SentRequest) {
        updateSentRequest(true)
        fetchMeta().then(data => setState({posts: data}))
    }

    console.log(state.posts)

    return (
        <div>
            <h1 className="heading">stockmann.dev</h1>
            <div className="card-primary-dark container-2col center" style={{maxWidth: "100em"}}>
                <div className="container" style={{maxWidth: "30em"}}>
                    <img alt="404" src="" />
                </div>
                <div className="container padding-l center" style={{width: "100%"}}>
                    <h1 className="center digitalt" style={{fontSize: "5em", margin: 0}}>Team<span style={{color:"#ff002b"}}>Smiley</span></h1>
                    <a href="https://teamsmiley.org" className="center"><button style={{margin: "1em", fontSize: "1em"}}>Visit Site</button></a>
                </div>
            </div>
        </div>
    )
}

export default Blog