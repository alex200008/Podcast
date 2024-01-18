import Podcast from "./Podcast";

function PodcastList({data}) {
    const podcastList = data.map(podcast => <Podcast key={podcast.id} podcast={podcast} active={false}/>);

    return <ul>{podcastList}</ul>
}

export default PodcastList