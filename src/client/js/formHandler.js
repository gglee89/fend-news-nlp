import { countDown } from './util/countdown';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputValue = document.getElementById('date_trip').value
    let datetime = new Date(inputValue)

    // Client.checkForName(formText)

    countDown(datetime);

    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })
}

export { handleSubmit }
