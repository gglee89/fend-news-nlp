import { loadResults } from './loadResults';

const handleSubmit = async (event) => {
    event.preventDefault()

    // Check what text was put into the form field
    let placename = document.getElementById('placename').value;

    loadResults(placename);
}

export { handleSubmit }
