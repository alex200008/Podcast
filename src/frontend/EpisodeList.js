import Episode from "./Episode";
import Podcast from "./Podcast";
import {uid} from "uid";

function EpisodeList({episodeData, podcastData, adder}) {
    // get podcast id
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    // get podcast and episode data
    let selectedPodcast = podcastData.find(podcast => podcast.id.toString() === id) || {}
    const episodeList = episodeData.filter(episode => episode.podcastId === selectedPodcast.id)
        .map(episode => <Episode key={episode.id} episode={episode}/>)

    const addEpisode = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())

        const podcast = {
            podcastId: selectedPodcast.id,
            id: uid(),
            title: data.title,
            description: data.description,
            release: data.date,
            url: data.url
        }
        adder(podcast)
    }

    return (<>
        <Podcast podcast={selectedPodcast} active={true}/>
        <form method="post" onSubmit={addEpisode}>
            <input type="text" id="podcast_title" name="title"/>
            <input type="text" id="podcast_title" name="description"/>
            <input type="date" id="podcast_title" name="date"/>
            <input type="text" id="podcast_title" name="url"/>
            <button type="submit">Add new podcast</button>
        </form>
        <ul>{episodeList}</ul>
    </>)
}

export default EpisodeList