const apiURL = "http://api.geonames.org/postalCodeLookupJSON";
const username = "demo";

/**
 * @description Fetch from Geoname API
 * @param {String} placename 
 */
const fetchAPI = async (placename) => {
    if (placename === "" || typeof (placename) !== "string") {
        throw Error("'placename' paramenter in WeatherBit API is not provided");
    }

    const response = await fetch(`${apiURL}?placename=${placename}&username=${username}`);
    const data = await response.json();
    return data;
}

export default { fetchAPI };