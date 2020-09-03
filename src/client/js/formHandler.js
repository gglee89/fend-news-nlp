import { countDown } from './util/countdown';
import geoname from "./api/geoname";
import weatherBit from "./api/weatherBit";
import pixabay from "./api/pixabay";

const handleSubmit = async (event) => {
    event.preventDefault()

    // Check what text was put into the form field
    let placename = document.getElementById('placename').value;
    let resultsContainer = document.getElementById('results_container');
    // let datetime = new Date(inputValue)
    // countDown(datetime);

    try {

        const geonameData = await geoname.fetchAPI(placename);
        const weatherBitData = await weatherBit.fetchAPI(placename);
        const pixabayData = await pixabay.fetchAPI(placename);

        const { hits } = pixabayData;
        console.log('geonameData', geonameData);
        console.log('weatherBitData', weatherBitData);
        console.log('pixabayData', pixabayData);

        // Section: Temperature
        const { data } = weatherBitData;
        let weatherInput = document.getElementById('weather_temperature');
        if (data.length <= 0) {
            throw Error("WeatherBIT API didn't return any data");
        } else {
            let weatherProps = data[0];
            weatherInput.innerHTML = weatherProps.app_temp;
        }

        // Section: Images
        resultsContainer.innerHTML = "";
        hits.map(hit => {
            const html = `
                <div class="card mx-1 my-1" style="width: 12rem;">
                    <img src="${hit.largeImageURL}" class="card-img-top" alt="${hit.tags}">
                </div>
            `;

            resultsContainer.insertAdjacentHTML('beforeend', html);
        });

    } catch (error) {
        console.log(error);
    }
}

export { handleSubmit }
