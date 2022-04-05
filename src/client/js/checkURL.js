//we need a function to check if the url is valid

const checkURL = (url) => {
    //check if the url is valid
    if (url.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)) {
        return true;
    } else {
        return false;
    }
};

console.log(checkURL("http://www.google.com"));

export default checkURL;
