const dotenv = require('dotenv');
dotenv.config();

const path = require("path");
const express = require("express");
const fetch = require("node-fetch");

//we need to create a variable to store the env apikey
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//we need to initiate the app with the path to the public folder
app.use(express.static(path.resolve("dist")));

const cors = require('cors');
app.use(cors());

// console.log("__dirname: ", __dirname);

//this sends the index.html file to the client (hosts the static file)
app.get('/*', (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
})

//create a route that handles the post request for the new URL that comes from the form
app.post('/api', (req, res) => {
    console.log("req.body: ", req.body);
    const dataAPI = req.body;
    //we need to build the url using the base url and the api key
    const url = baseUrl + apiKey + '&url=' + dataAPI.url;
    //we need to pull the data for confidence, irony, and agreement from the url
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //we need to grab confidence, irony, and agreement from the data
            const confidence = data.confidence;
            const irony = data.irony;
            const agreement = data.agreement;

            //we need to store the data in our server 'database'
            let dataAPI = { confidence, irony, agreement };

            console.log("data: ", dataAPI);
            res.send(dataAPI);
        });
});

app.listen(process.env.port || 3000, () => {
    console.log('Example app listening on port 3000!');
})
