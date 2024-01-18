import "./Episode.css"

function Episode({episode}) {
    const audio = new Audio(episode.url)

    const start = () => {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }


    return <div className="Episode">
        <h3 className="Episode-title">{episode.title}</h3>
        <p className="Episode-description">{episode.description}</p>
        <p className="Episode-release">{episode.release}</p>
        <button onClick={start} className="Episode-button">play/pause</button>
    </div>
}

export default Episode;