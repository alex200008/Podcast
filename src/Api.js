import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080"
export function getPodcasts(setter) {
    axios.get('/api/podcasts')
        .then(response => {
            console.log(response.data);
            setter(response.data)
        }).catch(error => {
        console.error(error);
    })
}


export function savePodcasts(data) {
    const newData = data.map(podcast => {
        return { id: podcast.id, title: podcast.title, img:  axios.defaults.baseURL.concat("/api/image/").concat(podcast.id)}
    })
    axios.post("/api/updatepodcasts", newData)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
        })
}

export function getEpisodes(setter) {
    axios.get('/api/episodes')
        .then(response => {
            console.log(response.data);
            setter(response.data)
        })
        .catch(error => {
            console.error(error);
        })
}

export function saveEpisodes(data) {
    axios.post("/api/updateepisodes", data)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
        })
}

export function saveImage(file, podcastId) {
    let formData = new FormData()
    console.log(file)
    formData.append("image", file)
    formData.append("podcastId", podcastId)
    axios.post("/api/postimage", formData)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
        })
}