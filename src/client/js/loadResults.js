import geoname from "./api/geoname";
import weatherBit from "./api/weatherBit";
import pixabay from "./api/pixabay";

const loadResults = async (placename = "Los Angeles") => {
    try {

        // const geonameData = await geoname.fetchAPI(placename);
        const weatherBitData = await weatherBit.fetchAPI(placename);
        const pixabayData = await pixabay.fetchAPI(placename);

        const { hits } = pixabayData;

        // Section: Top
        const { data } = weatherBitData;
        let weatherPlacenameInput = document.getElementById('weather_placename');
        let weatherTemperatureInput = document.getElementById('weather_temperature');
        // let weatherCoordinatesInput = document.getElementById('weather_coordinates');

        weatherPlacenameInput.innerHTML = `Today's Weather in ${placename}`;
        if (data.length <= 0) {
            throw Error("WeatherBIT API didn't return any data");
        } else {
            let weatherProps = data[0];
            const html = `
                <div>${weatherProps.app_temp} °C</div>
            `;

            weatherTemperatureInput.innerHTML = "";
            weatherTemperatureInput.insertAdjacentHTML('beforeend', html);
        }

        // weatherCoordinatesInput.

        // Section: Images
        let picturesTitle = document.getElementById('pictures_title');
        let picturesContainer = document.getElementById('pictures_container');

        picturesTitle.innerHTML = `Images from ${placename}`;
        picturesContainer.innerHTML = "";
        hits.map(hit => {
            const html = `
                <div class="card mx-1 my-1" style="width: 12rem;">
                    <img src="${hit.largeImageURL}" class="card-img-top" alt="${hit.tags}">
                </div>
            `;

            picturesContainer.insertAdjacentHTML('beforeend', html);
        });

    } catch (error) {
        console.log(error);
    }
}

export { loadResults }