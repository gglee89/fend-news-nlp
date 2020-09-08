const countDown = (datetime) => {
  const now = new Date();
  return timeDifference(datetime, now);
};

/**
 * @description Format the time difference between two dates.
 * @format e.g.: 1 day/s 2 hour/s 3 minute/s 50 second/s
 * @param {Date} date1
 * @param {Date} date2
 */
const timeDifference = (date1, date2) => {
  let difference = date1.getTime() - date2.getTime();

  let daysDifference = Math.round(Math.abs(difference / (1000 * 60 * 60 * 24)));
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  let hoursDifference = Math.round(Math.abs(difference / (1000 * 60 * 60)));

  return daysDifference + ' day/s ' + hoursDifference + ' hour/s ';
};

/**
 * @description Get the difference in days
 * @param {Date} start
 * @param {Date} end
 */
const daysDifference = (start, end) => {
  const millisBetween = start.getTime() - end.getTime();
  const daysDiff = millisBetween / (1000 * 3600 * 24);

  return Math.round(Math.abs(daysDiff));
};

export { countDown, timeDifference, daysDifference };
