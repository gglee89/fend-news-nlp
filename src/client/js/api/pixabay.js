const apiKEY = "18160801-773feb1c17fd2dc4291a58b35";
const apiURL = "https://pixabay.com/api/";
const category = "travel";

/**
 * @description Fetch PIXABAY API
 * @param {string} searchTerm 
 */
const fetchAPI = async (searchTerm) => {
    if (searchTerm === "" || typeof (searchTerm) !== "string") {
        throw Error("'searchTerm' parameter in pixabay API is not provided");
    }

    try {
        const response = await fetch(`${apiURL}?key=${apiKEY}&q=${searchTerm}&category=${category}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Error PIXABAY API', error);
    }

}

export default { fetchAPI };