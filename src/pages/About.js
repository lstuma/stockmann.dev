import "./about.css"

const About = () => {
    return (
    <div id="about">
        <div className="container">
            <span className="heading">About Me</span>
            <p style={{wordBreak: "break-word", padding: "-0 3em", margin: "0"}}>
                Hey there!
                <br/><br/>
                My name is Lukas Stockmann. I am a seventeen-year-old student currently navigating through twelfth grade at the Landesgymnasium für Hochbegabgte. I'm very passionate about coding, tinkering with AI and ML solutions, and delving into the world of ethical hacking and cybersecurity.
                <br/><br/>
                I am thrilled to share my blog with you and I hope you'll discover some articles that spark your interest and resonate with your passions! If you want to reach out to me feel free to send me an email under <a href="mailto:lstuma@proton.me" className="link">lstuma@proton.me</a>
            </p>
        </div>
        <div className="container center" style={{marginTop: "5em"}}>
            <span className="heading">My Work & Accomplishments</span>
            <div className="container padding-sides-l container-2col center no-mobile-padding-sides mobile-padding-sides-sm">
                <div className="container card-invisible" style={{width: "100%", padding:"0"}}>
                    <img className="accomplishment-img round" src={process.env.PUBLIC_URL+"/img/about/hackaburg_2023.jpg"} alt="404" style={{objectPosition: "0 -1em"}} />
                    <a className="link" href="https://www.techbase.de/news-termine/events-termine/detail/25/5/2023/hackaburg-2022"><h3 style={{margin: "1em 0 0"}}>Hackaburg 2023 goes Green 🌱</h3></a>
                    <p style={{margin: "0.3em 0 1em"}}>
                        We won the challenge-award <q>Work smarter and sustainable</q> provided by Vitesco Technologies with our project <a className="link" href="https://github.com/TeamSmil3y/hubhopper">HubHopper.app</a>.
                    </p>
                </div>
                <div className="container card-invisible">
                    <img className="accomplishment-img round" src={process.env.PUBLIC_URL+"/img/about/sofdcar.png"} alt="404" style={{objectPosition: "0 0em"}} />
                    <a className="link" href="https://sofdcar.de/language/en/sofdcar-hackathon_/"><h3 style={{margin: "1em 0 0"}}>SofDCar Hackathon 2023</h3></a>
                    <p style={{margin: "0.3em 0 1em"}}>
                        I participated in the <a className="link" href="https://sofdcar.de/language/en/sofdcar-hackathon_/">SofDCar Hackathon</a> and helped develop our project <a className="link" href="https://github.com/lstuma/Paper2Box">Paper2Box</a>,
                        which uses RCNN and text classification to convert sketches of UML diagrams into a JSON format, which can then be viewed and edited in a web editor.
                    </p>
                </div>
                <div className="container card-invisible">
                    <img className="accomplishment-img round" src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/335/431/datas/medium.png" alt="404" style={{objectFit: "contain", objectPosition: "50% 0", backgroundColor: "#cbdbe3"}} />
                    <a className="link" href="https://wintr.devpost.com/"><h3 style={{margin: "1em 0 0"}}>WintR Hackathon 2023 ❄️</h3></a>
                    <p style={{margin: "0.3em 0 1em"}}>
                        I won the <em>2nd place</em> in the <a className="link" href="https://wintr.devpost.com/">WintR Hackathom</a> with my project <a className="link" href="https://github.com/lstuma/WintR">ComeTogether</a>. <br/>
                        ComeTogether is a webapp which helps people connect with others by giving them a platform to reach out and advertise for local in-person or online events.
                    </p>
                </div>
                <div className="container card-invisible">
                    <img className="accomplishment-img round" src={process.env.PUBLIC_URL+"/img/about/sdacathon.jpg"} id="img-sdacathon" alt="404" />
                    <a className="link" href="https://sdac.tech/hackathon/"><h3 style={{margin: "1em 0 0"}}>SDaCathon 2022 🏗️</h3></a>
                    <p style={{margin: "0.3em 0 1em"}}>
                        We won the special-award <q>Teens in Tech</q> for our submitted project <a className="link" href="https://github.com/lstuma/WePlan">WePlan</a> in the <a className="link" href="https://sdac.tech/hackathon/">SDaCathon 2023</a><br/>
                        WePlan is an intelligent scheduling tool using text classification to estimate the time a task may take by comparing it to similar entries in the database.
                    </p>
                </div>
                <div className="container card-invisible">
                    <img className="accomplishment-img round" id="img-ostalbhackathon" src={process.env.PUBLIC_URL+"/img/about/ostalbhackathon.jpg"} alt="404" />
                    <a className="link" href="https://www.schwaebische.de/regional/ostalb/aalen/geballte-innovations-power-1308045"><h3 style={{margin: "1em 0 0"}}>Ostalb Hackathon 2022 🚀</h3></a>
                    <p style={{margin: "0.3em 0 1em"}}>
                        Our project <a className="link" href="https://github.com/raspitim/SmileLikeABosch">SmileLikeABosch</a>, which allows for smart product pricing estimation using a polynomial regression model, earned us the <em>Technology-Award</em> in the <a className="link" href="https://www.schwaebische.de/regional/ostalb/aalen/geballte-innovations-power-1308045">Ostalb Hackathon</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About