import './App.css';

import './frontend/Podcast'
import PodcastList from "./frontend/PodcastList";
import EpisodeList from "./frontend/EpisodeList";
import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {getPodcasts, savePodcasts, getEpisodes, saveEpisodes, saveImage} from "./Api";
import SearchPage from "./frontend/SearchPage";

class App extends Component {
    state = {
        podcastData: [],
        episodeData: []
    }

    // get data from back
    componentDidMount() {
        getPodcasts(data => this.setState({podcastData: data}))
        getEpisodes(data => this.setState({episodeData: data}))
    }

    // update back and react
    addPodcast(podcast, img) {
        const newData = [...this.state.podcastData, podcast]
        this.setState({podcastData: newData})
        savePodcasts(newData)
        saveImage(img, podcast.id)
    }

    // update back and react
    addEpisode(episode) {
        const newData = [...this.state.episodeData, episode]
        this.setState({episodeData: newData})
        saveEpisodes(newData)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={
                                <PodcastList data={this.state.podcastData}
                                             adder={(podcast, img) => this.addPodcast(podcast, img)}/>
                            }/>
                            <Route path="/podcast" element={
                                <EpisodeList episodeData={this.state.episodeData} podcastData={this.state.podcastData}
                                             adder={(episode) => this.addEpisode(episode)}/>
                            }/>
                            <Route path="/search" element={<SearchPage episodeData={this.state.episodeData}
                                                                       podcastData={this.state.podcastData}/>}/>
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        );
    }
}

export default App;
