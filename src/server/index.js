const dotenv = require('dotenv');
dotenv.config();

const path = require("path");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//we need to initiate the app with the path to the current file (index.js)
app.use(express.static(path.resolve("dist")));

// console.log("__dirname: ", __dirname);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
})

app.post('/', (req, res) => {
    console.log("req.body: ", req.body);
    res.send("Hello World");
})

app.listen(process.env.port || 3000, () => {
    console.log('Example app listening on port 3000!');
})