//we need a function to handle form input

const formHandler = (e) => {
    e.preventDefault();
    const url = document.querySelector('#url').value;
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const urlValid = checkURL(url);
    if (urlValid) {
        const data = {
            url: url,
            title: title,
            description: description
        };
        fetch('/api/v1/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert(data.message);
                }
            })
            .catch(err => console.log(err));
    } else {
        alert('Invalid URL');
    }
};


export default formHandler;