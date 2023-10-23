import { TerminalLoading } from './TerminalLoading'
import "./about.css"

const About = () => {
    return (
    <div id="content">
        <h1 className="heading">About me</h1>
        <h2>Hey there! 👋</h2>
        <p>Hello my name is Lukas! I am a 17-year old tech enthusiast currently still going to school.</p>
        <p>While I am pretty much interested in anything tech-related, I am especially intrigued by information security, web and the world of ML/AI. 🤖</p>
        <p>I love meeting up with other's who share the same fascination for the world of tech and I really enjoy working on projects together with friends.</p>
        <h2>Some of my projects</h2>
        <div id="projects">
            <div className="item no-mobile">
                <img alt="404" src={process.env.PUBLIC_URL+"/img/about/hackaburg_2023.jpg"}></img>
                <div>
                    <h3>Hackaburg 2023</h3>
                    <span className="emoji">🏰</span>
                </div>
            </div>
            <div className="item no-mobile">
                <img alt="404" src={process.env.PUBLIC_URL+"/img/about/sdacathon.jpg"}></img>
                <div>
                    <h3>SDaCathon 2022</h3>
                    <span className="emoji">🏗️</span>
                </div>
            </div>
            <div className="item no-mobile">
                <img alt="404" src={process.env.PUBLIC_URL+"/img/about/ostalbhackathon.jpg"}></img>
                <div>
                    <h3>Ostalb Hackathon 2022</h3>
                    <span className="emoji">🚀</span>
                </div>
            </div>
            <ul className="item mobile">
                <li>Hackaburg 2023</li><br/>
                <li>SDaCathon 2022</li><br/>
                <li>Ostalb Hackathon 2022</li>
            </ul>
        </div>
        <TerminalLoading lines={
        ["$ whoami",
         "+Hey there!",
         "+My name ist Lukas, I am a tech enthusiast primarily interestend in cybersecurity, web, and the vast space of ML/AI.",
         "$ hydra -l lstuma -p /usr/share/wordlists/rockyou.txt 192.168.0.1 rdp",
         " Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).", "S",
         " [DATA] max 16 tasks per 1 server, overall 16 tasks, 14344398 login tries (l:1/p:14344398), ~896525 tries per task", "S",
         "[DATA] attacking ssh://192.168.0.1:22/", "S",
         " [STATUS] 299.00 tries/min, 299 tries in 00:01h, 14344238 to do in 734:44h, 16 active",
         "- login \"lstuma\" - pass \"cookies\"",
         "- login \"lstuma\" - pass \"xss\"",
         "+ login \"lstuma\" - pass \"coding\"", "S",
         " 1 of 1 target successfully completed, 1 valid password found","W",
         "$ cat /etc/shadows",
         " cat: /etc/shadow: Permission denied "]} />
    </div>
    )
}

export default About