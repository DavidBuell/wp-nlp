import checkURL from "./checkURL";
const fetch = require('node-fetch');

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        return await response.json();
    } catch (error) {
        console.log("error", error);
    }
}

const formHandler = async (evt) => {
    evt.preventDefault();
    //we need to check if the url is valid and if true send to server
    const url = document.getElementById('userInput').value;
    if (checkURL(url)) {
        const data = await post('http://localhost:3000/api', { url }).then(data => {
            console.log(data);
            document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
            document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
        })
    } else {
        alert('Please enter a valid URL');
    }
}



export default formHandler;