const apiURL = "http://api.geonames.org/postalCodeLookupJSON";
const username = "demo";

/**
 * @description Fetch from Geoname API
 * @param {String} placename 
 */
const fetchAPI = async (placename) => {
    const response = await fetch(`${apiURL}?placename=${placename}&username=${username}`);
    const data = await response.json();

    console.log('data', data);
}

export default { fetchAPI };