import { Link } from 'react-router-dom'
import { BiLinkExternal } from 'react-icons/bi'

const Home = () => {
    return <div className="container padding-sides-m">
        <h1 className="heading">stockmann.dev</h1>
        <div className="card-primary-dark container-2col center" style={{maxWidth: "80em"}}>
            <div className="container" style={{maxWidth: "30em"}}>
                <img alt="404" src={process.env.PUBLIC_URL+"/img/teamsmiley.svg"} style={{width: "auto", height: "20em"}} className="center middle" />
            </div>
            <div className="container padding-l right" style={{width: "100%"}}>
                <h1 className="center digitalt" style={{fontSize: "7em", margin: 0, fontWeight: "normal"}}>Team<span style={{color:"#ff002b"}}>Smiley</span></h1>
                <a href="https://teamsmiley.org" target="_blank" className="center"><button style={{margin: "1em", fontSize: "1em"}}>Visit Site <BiLinkExternal style={{transform: "translateY(0.1em)"}} /></button></a>
            </div>
        </div>
        <h1 className="heading">Featured Blog Articles</h1>
        <div className="container container-2col">
            <div className="card-inverted right" style={{maxWidth: "30em"}}>
                <h2 className="center">ARP Spoofing</h2>
                <p className="inter bold"> Arp spoofing attacks utilize the ARP (Address Resolution Protocol) to conduct man in the middle attacks upon targets inside of a network. </p>
                <Link to="/blog/read/001" className="center"><button style={{margin: "1em"}}>Go to article</button></Link>
            </div>
            <div className="card-inverted left" style={{maxWidth: "30em"}}>
                <h2 className="center">ARP Spoofing</h2>
                <p className="inter bold"> Arp spoofing attacks utilize the ARP (Address Resolution Protocol) to conduct man in the middle attacks upon targets inside of a network. </p>
                <Link to="/blog/read/001" className="center"><button style={{margin: "1em"}}>Go to article</button></Link>
            </div>
            
        </div>
    </div>
}

export default Home