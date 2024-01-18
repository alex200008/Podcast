import Episode from "./Episode";
import Podcast from "./Podcast";

function EpisodeListe({data, podcast}) {
    const episodeList = data.filter(episode => episode.podcastId === podcast.id)
        .map(episode => <Episode key={episode.id} episode={episode}/>)


    return (<>
        <Podcast key={podcast.id} podcast={podcast} active={true}/>
        <ul>{episodeList}</ul>
    </>)
}

export default EpisodeListe