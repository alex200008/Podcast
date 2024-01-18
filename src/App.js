import './App.css';

import './frontend/Podcast'
import Podcast from "./frontend/Podcast";
import Episode from "./frontend/Episode";



function App() {
    const podcastData = [
        {img: "./logo192.png", title: "Podcast 1", id: 0},
        {img: "./logo192.png", title: "Podcast 2", id: 1},
        {img: "./logo192.png", title: "Podcast 3", id: 2},
        {img: "./logo192.png", title: "Podcast 4", id: 3}
    ];

    const episodeData = [
        {podcastId: 0, id: 0, title: "Episode 1", description: "First episode !", release:"03/01/2000", url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"},
        {podcastId: 0, id: 1, title: "Episode 2", description: "The best episode !", release:"07/02/2024", url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"},
        {podcastId: 1, id: 2, title: "Episode 3", description: "I'm an episode", release:"01/01/1", url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"},
        {podcastId: 1, id: 3, title: "Episode 4", description: "Hello World !", release:"29/02/2023", url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"}
    ];

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    let main;

    if (id != null) { // Todo if not find
        const selectedPodcast = podcastData.find(podcast => podcast.id.toString() === id)
        const episodeList =
            episodeData.filter(episode => episode.podcastId === selectedPodcast.id)
            .map(episode =>
                <Episode key={episode.id} title={episode.title} description={episode.description} release={episode.release} url={episode.url}/>
            )
        main = (<>
            <Podcast key={selectedPodcast.id} img={selectedPodcast.img} title={selectedPodcast.title} id={selectedPodcast.id} active={true}/>
            <ul>{episodeList}</ul>
        </>)

    } else {
        const podcastList = podcastData.map(podcast =>
            <Podcast key={podcast.id} img={podcast.img} title={podcast.title} id={podcast.id} active={false}/>
        );
        main = (<ul>{podcastList}</ul>)
    }




  return (
    <div className="App">
      <header className="App-header">
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        {main}
      </header>
    </div>
  );
}

export default App;
