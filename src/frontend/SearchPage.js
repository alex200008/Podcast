import Episode from "./Episode";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function SearchPage({episodeData, podcastData}) {
    const [filterText, setFilterText] = useState("")

    const episodeFilter = e => {
        setFilterText(e.target.value)
    }

    const episodeList = episodeData.filter(episode => episode.title.search(filterText) !== -1).map(episode => <Episode
        key={episode.id} episode={episode}/>)


    return (<>
        <Link to="/">
            <button className="Podcast-button">Back</button>
        </Link>
        <input type="text" id="podcast_title" name="search" onChange={episodeFilter}/>
        <ul>{episodeList}</ul>
    </>)
}