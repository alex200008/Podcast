import "./Podcast.css"

function Podcast({podcast, active}) {
    const goBack = () => {
        if (active) {
            window.location.replace("/")
        } else {
            window.location.replace("/?id=".concat(podcast.id))
        }
    }

    const buttonText = (active) ? "Back" : "Go"

    return <div className="Podcast">
        <img src={podcast.img} className="Podcast-image" alt="img"/>
        <h2 className="Podcast-title">{podcast.title}</h2>
        <button onClick={goBack} className="Podcast-button">{buttonText}</button>
    </div>
}

export default Podcast;