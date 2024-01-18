import "./Episode.css"

function Episode({title, description, release, url}) {
    const audio = new Audio(url)

    const start = () => {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }


    return <div className="Episode">
        <h3 className="Episode-title">{title}</h3>
        <text className="Episode-description">{description}</text>
        <text className="Episode-release">{release}</text>
        <button onClick={start} className="Episode-button">play/pause</button>
    </div>
}

export default Episode;