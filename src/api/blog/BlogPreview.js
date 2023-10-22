import { useState } from 'react'
import { Link } from 'react-router-dom'
import random from 'random'

import { LoremIpsumText } from '../../components/loremipsum/LoremIpsumText'
import { fetchMeta } from "../../api/blog/fetchMeta"

import './blogpreview.css';

const BlogPreview = ({id}) => {
    const [posts, setPosts] = useState([])
    const [sentRequest, updateSentRequest] = useState(false)
    
    if(!sentRequest) {
        updateSentRequest(true)
        fetchMeta().then(data => setPosts(data));
    }
    
    return (
        <>
        {posts.length>0?
            <div className="featured-article">
                <h2 className="center text-center">{posts[id].title}</h2>
                <p className="inter bold"> {posts[id].preview} </p>
                <Link to={"/blog/read/"+posts[id].id} className="center"><button className="featured-article-button" >Go to article</button></Link>
            </div>
        :
            <div className="featured-article">
                <h2 className="center text-center loading-text">{LoremIpsumText(random.int(40, 60))}</h2>
                <p className="inter bold loading-text"> {LoremIpsumText(random.int(260, 300))} </p>
                <Link to={"#"} className="center"><button className="featured-article-button loading-button" >Loading</button></Link>
            </div>
        }
        </>
        )
}

export default BlogPreview