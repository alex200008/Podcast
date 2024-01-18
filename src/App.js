import './App.css';

import './frontend/Podcast'
import PodcastList from "./frontend/PodcastList";
import EpisodeListe from "./frontend/EpisodeListe";


function App() {
    const podcastData = [
        {img: "./logo192.png", title: "Podcast 1", id: 0},
        {img: "./logo192.png", title: "Podcast 2", id: 1},
        {img: "./logo192.png", title: "Podcast 3", id: 2},
        {img: "./logo192.png", title: "Podcast 4", id: 3}
    ];

    const episodeData = [
        {
            podcastId: 0,
            id: 0,
            title: "Episode 1",
            description: "First episode !",
            release: "03/01/2000",
            url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
        },
        {
            podcastId: 0,
            id: 1,
            title: "Episode 2",
            description: "The best episode !",
            release: "07/02/2024",
            url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
        },
        {
            podcastId: 1,
            id: 2,
            title: "Episode 3",
            description: "I'm an episode",
            release: "01/01/1",
            url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
        },
        {
            podcastId: 1,
            id: 3,
            title: "Episode 4",
            description: "Hello World !",
            release: "29/02/2023",
            url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
        }
    ];

    // get podcast url and id
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    let selectedPodcast;
    if (id != null) {
        selectedPodcast = podcastData.find(podcast => podcast.id.toString() === id)
    }

    let main;

    if (selectedPodcast !== undefined) {
        main = <EpisodeListe data={episodeData} podcast={selectedPodcast}/>
    } else {
        main = <PodcastList data={podcastData}/>
    }

    return (
        <div className="App">
            <header className="App-header">
                {main}
            </header>
        </div>
    );
}

export default App;
