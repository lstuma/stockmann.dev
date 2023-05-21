import { Link } from 'react-router-dom'
import { BiLinkExternal } from 'react-icons/bi'

const Home = () => {
    return <div className="container padding-sides-m">
        <h1 className="heading">stockmann.dev</h1>
        <div className="card-primary-dark container-2col center" style={{maxWidth: "100em"}}>
            <div className="container" style={{maxWidth: "30em"}}>
                <img src="" />
            </div>
            <div className="container padding-l center" style={{width: "100%"}}>
                <h1 className="center digitalt" style={{fontSize: "5em", margin: 0}}>Team<span style={{color:"#ff002b"}}>Smiley</span></h1>
                <a href="https://teamsmiley.org" className="center"><button style={{margin: "1em", fontSize: "1em"}}>Visit Site <BiLinkExternal style={{transform: "translateY(0.1em)"}} /></button></a>
            </div>
        </div>
        <h1 className="heading">Featured Articles</h1>
        <div className="container container-2col">
            <div className="card-inverted right" style={{maxWidth: "30em"}}>
                <h2 className="center">ARP Spoofing</h2>
                <p className="inter bold"> Arp spooding attacks utilize the ARP (Address Resolution Protocol) to conduct man in the middle attacks upon targets inside of a network. </p>
                <Link to="/blog/001" className="center"><button style={{margin: "1em"}}>Go to article</button></Link>
            </div>
            <div className="card-inverted left" style={{maxWidth: "30em"}}>
                <h2 className="center">ARP Spoofing</h2>
                <p className="inter bold"> Arp spooding attacks utilize the ARP (Address Resolution Protocol) to conduct man in the middle attacks upon targets inside of a network. </p>
                <Link to="/blog/001" className="center"><button style={{margin: "1em"}}>Go to article</button></Link>
            </div>
            
        </div>
    </div>
}

export default Home