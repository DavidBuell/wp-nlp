const path = require("path");
const express = require("express");

const app = express()

//we need to initiate the app with the path to the current file (index.js)
app.use(express.static(path.resolve(__dirname, "index.js")));

console.log("__dirname: ", __dirname);

app.get('/', function (req, res) {
    res.sendFile('C:\\Users\\mj\\Desktop\\wp-nlp\\dist\\index.html')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


