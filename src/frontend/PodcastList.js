import Podcast from "./Podcast";
import {useState} from "react";
import { uid } from 'uid';

function PodcastList({data, adder}) {
    const podcastList = data.map(podcast => <Podcast key={podcast.id} podcast={podcast} active={false}/>)

    const [file , setFile] = useState()

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const addPodcast = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())

        const podcast = {
            id: uid(),
            title: data.title,
            img: file
        }
        adder(podcast)
    }

    return (
        <div>
            <form method="post" onSubmit={addPodcast}>
                <input type="text" id="podcast_title" name="title"/>
                <input type="file" accept="image/*" onChange={handleChange}/>
                <img src={file} alt="" width="100px" height="100px"/>
                <button type="submit">Add new podcast</button>
            </form>
            <ul>{podcastList}</ul>
        </div>
    )
}

export default PodcastList