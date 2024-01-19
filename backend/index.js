const express = require('express')
const formData = require("express-form-data");
const os = require("os");
const bodyParser = require('body-parser')


const app = express()
// const jsonParser = bodyParser.json()


let podcasts = [
    {img: "./logo192.png", title: "Podcast 1", id: "0"},
    {img: "./logo192.png", title: "Podcast 2", id: "1"},
    {img: "./logo192.png", title: "Podcast 3", id: "2"},
    {img: "./logo192.png", title: "Podcast 4", id: "3"}
]
let episodes = [
    {
        podcastId: "0",
        id: "0",
        title: "Episode 1",
        description: "First episode !",
        release: "03/01/2000",
        url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
    },
    {
        podcastId: "0",
        id: "1",
        title: "Episode 2",
        description: "The best episode !",
        release: "07/02/2024",
        url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
    },
    {
        podcastId: "1",
        id: "2",
        title: "Episode 3",
        description: "I'm an episode",
        release: "01/01/1",
        url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
    },
    {
        podcastId: "1",
        id: "3",
        title: "Episode 4",
        description: "Hello World !",
        release: "29/02/2023",
        url: "https://ia601303.us.archive.org/32/items/jean-toba-le-manege-pour-les-antilles/JeanToba-LeManegePourLesAntilles.mp3"
    }]
let images = []
episodes = []
podcasts = []

const options = {
    uploadDir: os.tmpdir(),
    autoClean: false
};

// parse data with connect-multiparty.
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream
app.use(formData.stream());
// union the body and the files
app.use(formData.union());

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader( "Access-Control-Allow-Headers", "*")
    next()
})

app.get('/api/podcasts',  (req, res) => {
    res.status(200)
        .json(podcasts)
})

app.post('/api/updatepodcasts', (req, res) => {
    podcasts = req.body
    res.status(200).json(req.body)
})

app.get('/api/episodes', (req, res) => {
    res.status(200).json(episodes)
})

app.post('/api/updateepisodes', (req, res) => {
    episodes = req.body
    res.status(200).json(episodes)
})

// "Content-Type": "multipart/form-data"
app.post("/api/postimage", (req, res) => {
    images.push({podcastId: req.body.podcastId, img: req.body.image})
    res.status(200).send("OK")
})

app.get("/api/image/:id", (req, res) => {
    let id = req.params.id
    const podcastImage = images.find(data => data.podcastId === id)
    if (podcastImage !== undefined) {
        const url = podcastImage.img.path
        res.status(200).contentType("image/*").sendFile(url)
    } else {
        res.sendStatus(404)
    }
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})


