import "./Podcast.css"

function Podcast({img, title, id}) {
    return <div className="Podcast">
        <img src={img} className="Podcast-image" alt="img"/>
        <h2 className="Podcast-title">{title}</h2>
        <div className="Podcast-button">play/back</div>
    </div>
}

export default Podcast;