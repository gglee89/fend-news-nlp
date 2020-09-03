const apiKey = "9b5132d9c1ee40f4868ef55430be9a57";
const apiURL = "https://api.weatherbit.io/v2.0/current";

/**
 * @description: Fetch from WeatherBIT API
 * For Documentation: https://www.weatherbit.io/api/weather-current
 * @param {String} city 
 */
const fetchAPI = async (city) => {
    if (city === "" || typeof (city) !== "string") {
        throw Error("'city' paramenter in WeatherBit API is not provided");
    }
    const response = await fetch(`${apiURL}?key=${apiKey}&city=${city}`);
    const data = await response.json();
    return data;

}

export default { fetchAPI };