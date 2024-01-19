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
    axios.post("/api/updatepodcasts", data)
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
