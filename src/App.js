import './App.css';

import './frontend/Podcast'
import PodcastList from "./frontend/PodcastList";
import EpisodeList from "./frontend/EpisodeList";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    const [podcastData, setPodcastData] = useState([
        {img: "./logo192.png", title: "Podcast 1", id: 0},
        {img: "./logo192.png", title: "Podcast 2", id: 1},
        {img: "./logo192.png", title: "Podcast 3", id: 2},
        {img: "./logo192.png", title: "Podcast 4", id: 3}
    ])
    const [episodeData, setEpisodeData] = useState([
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
    ])

    const addPodcast = podcast => {
        setPodcastData([
            ...podcastData,
            podcast
        ])
    }

    const addEpisode = episode => {
        setEpisodeData([
            ...episodeData,
            episode
        ])
    }


    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <PodcastList data={podcastData} adder={addPodcast}/>
                        }/>
                        <Route path="/podcast" element={
                            <EpisodeList episodeData={episodeData} podcastData={podcastData} adder={addEpisode}/>
                        }/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
