//we need a function to check if the url is valid

const checkURL = (url) => {
    //check if the url is valid in a simple way by checking if it starts with http or https
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return true;
    } else {
        return false;
    }
};

// console.log(checkURL("http://www.google.com"));
// console.log(checkURL("htp://website.com/"));

export default checkURL;
