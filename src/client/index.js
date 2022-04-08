//we need to import checkURL and formHandler from the client folder
import formHandler from './js/formHandler.js'

//we need to import our main.scss file
import './styles/main.scss'

//Run the formHandler function
window.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', formHandler);
});