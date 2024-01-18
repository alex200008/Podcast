import logo from "../logo.svg";
import "./Podcast.css"

function Podcast() {
    return <div className="Episode">
        <img src={logo} className="Podcast-image" alt="logo"/>
        <h2 className="Podcast-title">Title</h2>
        <div className="Podcast-button">play/back</div>
    </div>
}

export default Podcast;