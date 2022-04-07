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

//this sends the index.html file to the client (hosts the static file)
app.get('/*', (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
})

//we need an empty array to store the data in our server 'database'
let data = [];

//create a route that handles the post request for the new URL that comes from the form
app.post('/api', (req, res) => {
    console.log("req.body: ", req.body);
});

app.listen(process.env.port || 3000, () => {
    console.log('Example app listening on port 3000!');
})
