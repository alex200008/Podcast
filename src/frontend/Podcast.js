import "./Podcast.css"

function Podcast({img, title, id, active}) {
    const goBack = () => {
        if (active) {
            window.location.replace("/")
        } else {
            window.location.replace("/?id=".concat(id))
        }
    }

    const buttonText = (active)? "Back" : "Go"

    return <div className="Podcast">
        <img src={img} className="Podcast-image" alt="img"/>
        <h2 className="Podcast-title">{title}</h2>
        <button onClick={goBack} className="Podcast-button">{buttonText}</button>
    </div>
}

export default Podcast;