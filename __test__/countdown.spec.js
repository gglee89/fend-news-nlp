import {
  countDown,
  timeDifference,
  daysDifference,
} from '../src/client/js/util/countdown';

describe('countdown functions', () => {
  test('It should match the difference', () => {
    let dateObj = new Date('2020-10-10');
    let now = new Date();
    let result = countDown(dateObj);
    let timeDiff = timeDifference(dateObj, now);

    expect(result).toEqual(timeDiff);
  });

  test('It should match the difference in days', () => {
    let dateObj1 = new Date('2020-10-08');
    let dateObj2 = new Date('2020-10-10');

    let daysDiff = daysDifference(dateObj1, dateObj2);

    expect(daysDiff).toBe(2);
  });
});
