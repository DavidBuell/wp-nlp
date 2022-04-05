//we need to import checkURL and formHandler from the client folder
import checkURL from './js/checkURL'
import formHandler from './js/formHandler.js'
import html from './views/index.html'

//we need to import our main.scss file
import './styles/base.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/form.scss';

//add an event listener for when the submit button is clicked
document.getElementById('submit').addEventListener('click', formHandler);

//we need to export checkURL and formHandler
export { checkURL, formHandler }