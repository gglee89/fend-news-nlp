import { loadResults } from './loadResults';
import { appendSchedule } from './schedule';
import { countDown, daysDifference } from './util/countdown';

/**
 * @description Handle the Search button Click event
 * @param {Object} event 
 */
const handleSubmit = async (event) => {
    event.preventDefault();

    // Check what text was put into the form field
    const placename = document.getElementById('placename').value;

    loadResults(placename);
}

/**
 * @description Handle the Book button Click event
 * @param {Object} event 
 */
const handleBooking = async (event) => {
    event.preventDefault();

    const $drp = $('#weather_drp');
    const $placename = $('#placename');

    const placename = $placename.val() ? $placename.val() : "Los Angeles";
    const start = $drp.data('start');
    const end = $drp.data('end');

    const schedule = {
        destination: placename,
        startDate: start.format('MMM/D/Y'),
        endDate: end.format('MMM/D/Y'),
        duration: daysDifference(new Date(start._d), new Date(end._d)),
        remainingTime: countDown(new Date(start._d))
    }

    appendSchedule(schedule);
}

export { handleSubmit, handleBooking }
