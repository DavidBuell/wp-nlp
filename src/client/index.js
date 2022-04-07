//we need to import checkURL and formHandler from the client folder
import formHandler from './js/formHandler.js'

//we need to import our main.scss file
import './styles/base.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/form.scss';

window.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', formHandler);
});

export { formHandler }