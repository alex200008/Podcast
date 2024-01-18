import './App.css';

import './frontend/Podcast'
import Podcast from "./frontend/Podcast";



function App() {
    const podcastData = [
        {img: "./logo192.png", title: "Podcast 1", id: 0},
        {img: "./logo192.png", title: "Podcast 2", id: 1},
        {img: "./logo192.png", title: "Podcast 3", id: 2},
        {img: "./logo192.png", title: "Podcast 4", id: 3}
    ];

    const podcastList = podcastData.map(podcast =>
        <Podcast key={podcast.id} img={podcast.img} title={podcast.title}/>
    );


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
        <ul>{podcastList}</ul>
      </header>
    </div>
  );
}

export default App;
