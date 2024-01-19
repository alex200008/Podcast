import './App.css';

import './frontend/Podcast'
import PodcastList from "./frontend/PodcastList";
import EpisodeList from "./frontend/EpisodeList";
import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {getPodcasts, savePodcasts, getEpisodes, saveEpisodes} from "./api";

class App extends Component{
    state = {
        podcastData: [],
        episodeData: []
    }

    componentDidMount() {
        getPodcasts(data => this.setState({podcastData: data}))
        getEpisodes(data => this.setState({episodeData: data}))
    }
    addPodcast(podcast) {
        this.setState({podcastData: [
                ...this.state.podcastData,
                podcast
            ]})
        savePodcasts(this.state.podcastData)
    }

    addEpisode(episode) {
        this.setState({episodeData: [
                ...this.state.episodeData,
                episode
            ]})
        saveEpisodes(this.state.episodeData)
    }

    render () {
        return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <PodcastList data={this.state.podcastData} adder={(podcast) => this.addPodcast(podcast)}/>
                        }/>
                        <Route path="/podcast" element={
                            <EpisodeList episodeData={this.state.episodeData} podcastData={this.state.podcastData} adder={(episode) => this.addEpisode(episode)}/>
                        }/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
    }
}

export default App;
