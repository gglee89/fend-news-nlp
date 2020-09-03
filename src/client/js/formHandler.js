import { countDown } from './util/countdown';
import geoname from "./api/geoname";
import weatherBit from "./api/weatherBit";
import pixabay from "./api/pixabay";

const handleSubmit = async (event) => {
    event.preventDefault()

    // Check what text was put into the form field
    let inputValue = document.getElementById('date_trip').value
    let datetime = new Date(inputValue)
    countDown(datetime);

    try {
        let city = "Tallahassee";
        await geoname.fetchAPI(city);
        await weatherBit.fetchAPI(city);
        await pixabay.fetchAPI(city);

    } catch (error) {
        console.log('Error', error);
    }

    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })
}

export { handleSubmit }
