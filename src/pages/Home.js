import { Link } from 'react-router-dom'
import { BiLinkExternal } from 'react-icons/bi'
import { fetchMeta } from "./Blog"
import { useState } from 'react'
import './home.css';

const Home = () => {
    const [state, setState] = useState({posts: []})
    const [SentRequest, updateSentRequest] = useState(false)

    if(!SentRequest) {
        updateSentRequest(true)
        fetchMeta().then(data => setState({posts: data}))
    }

    return <div className="container padding-sides-m">
        <h1 className="heading">stockmann.dev</h1>
        <div className="card-primary-dark container-2col center mobile-width-100 round" style={{maxWidth: "80em"}}>
            <div className="container" style={{maxWidth: "30em"}}>
                <img alt="404" src={process.env.PUBLIC_URL+"/img/teamsmiley.svg"} style={{width: "auto", height: "20em"}} className="no-mobile center middle" />
            </div>
            <div className="container no-mobile-padding padding-l right" style={{width: "100%"}} id="teamsmiley-container-2">
                <h1 className="center digitalt mobile-textsize-h1" style={{fontSize: "7em", margin: 0, fontWeight: "normal"}}>Team<span style={{color:"#ff002b"}}>Smiley</span></h1>
                <a href="https://teamsmiley.org" rel="noopener noreferrer" target="_blank" className="center"><button style={{margin: "1em", fontSize: "1em"}}>Visit Site <BiLinkExternal style={{transform: "translateY(0.1em)"}} /></button></a>
            </div>
        </div>
        <h1 className="heading">Featured Blog Articles</h1>
        {state.posts.length>0?
        <div className="container container-2col">
            <div className="card-inverted featured-article right" style={{maxWidth: "30em"}}>
                <h2 className="center text-center">{state.posts[0].title}</h2>
                <p className="inter bold"> {state.posts[0].preview} </p>
                <Link to={"/blog/read/"+state.posts[0].id} className="center"><button className="featured-article-button" >Go to article</button></Link>
            </div>
            <div className="card-inverted featured-article left" style={{maxWidth: "30em"}}>
                <h2 className="center text-center">{state.posts[1].title}</h2>
                <p className="inter bold"> {state.posts[1].preview} </p>
                <Link to={"/blog/read/"+state.posts[1].id} className="center"><button className="featured-article-button" >Go to article</button></Link>
            </div>
        </div>
            :""}
    </div>
}

export default Home