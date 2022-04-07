const dotenv = require('dotenv');
dotenv.config();

const path = require("path");
const express = require("express");

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

app.get('/*', (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
})

//we need an empty array to store the data
let data = [];

//create a route that handles the post request for the new URL that comes from the form
app.post('/api', async (req, res) => {
    try {
        //get the url from the request body
        const url = req.body.url;
        console.log(url);
        //build the url to the api using the baseUrl and the apiKey
        const apiUrl = `${baseUrl}${apiKey}&lang=en&mode=general&url=${url}`;
        console.log(apiUrl);
        //we need to fetch the data from the api
        const data = await fetch(apiUrl);
        console.log(data);
        //we need to parse the data to json
        const json = await data.json();
        console.log(json);
        //we need to send the data for confidence, irony, and agreement to the client
        res.send({
            confidence: json.confidence,
            irony: json.irony,
            agreement: json.agreement
        });
    } catch (error) {
        console.log(error);
    }
});


app.listen(process.env.port || 3000, () => {
    console.log('Example app listening on port 3000!');
})
