//import { Link } from 'react-router-dom'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const fetchPost = async (link) => {
    let text = await fetch(link).then(data => data.text())
    let lines = text.split('\n')
    text = text.slice(text.indexOf('\n'))

    return {title: lines[0], text: text}
}
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markdown: "", request_sent: false}
    }
    render() {
        const queryParameters = new URLSearchParams(window.location.search)
        if(!queryParameters.has('a'))
            {
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
        else {
            const article = queryParameters.get('a')
            if(!this.state.request_sent) {
                this.setState({request_sent: true})
                fetchPost(process.env.PUBLIC_URL+"/blog/articles/"+article+".md").then(data => this.setState({markdown: data.text, title: data.title}))
            }
            return (
                <>
                    <div className="article-banner"> <h1 class="article-heading">{this.state.title}</h1></div>
                    <div className="container article padding-sides-m">
                        <div className="card">
                            <ReactMarkdown children={this.state.markdown} remarkPlugins={[remarkGfm]} />
                        </div>
                    </div>
                </>
            )
        }

    }
}

export default Blog