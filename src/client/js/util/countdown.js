const countDown = (datetime) => {
    const now = new Date();
    timeDifference(datetime, now);
}

const timeDifference = (date1, date2) => {
    let difference = date1.getTime() - date2.getTime();

    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24

    let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60

    let minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60

    let secondsDifference = Math.floor(difference / 1000);

    console.log('difference = ' +
        daysDifference + ' day/s ' +
        hoursDifference + ' hour/s ' +
        minutesDifference + ' minute/s ' +
        secondsDifference + ' second/s ');
}

export { countDown };