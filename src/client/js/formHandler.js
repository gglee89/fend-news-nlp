import { loadResults } from './loadResults';
import { loadSchedule } from './loadSchedule';
import { countDown, daysDifference } from './util/countdown';

const handleSubmit = async (event) => {
    event.preventDefault();

    // Check what text was put into the form field
    const placename = document.getElementById('placename').value;

    loadResults(placename);
}

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

    loadSchedule(schedule);
}

export { handleSubmit, handleBooking }
