import "./Podcast.css"
import {Link} from "react-router-dom";

function Podcast({podcast, active}) {
    const buttonText = (active) ? "Back" : "Go"
    const url = (active) ? "/" : "/podcast?id=".concat(podcast.id)

    return <div className="Podcast">
        <img src={podcast.img} className="Podcast-image" alt="img"/>
        <h2 className="Podcast-title">{podcast.title}</h2>
        <Link to={url}>
            <button className="Podcast-button">{buttonText}</button>
        </Link>
    </div>
}

export default Podcast;