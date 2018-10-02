const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const splitIntoWeeks = dates => {

  const datesInWeeks = [];

  const weekLength = 7;

  for (let i = 0, len = dates.length; i < len; i += weekLength) {

    datesInWeeks.push(dates.slice(i, i + weekLength));

  }

  return datesInWeeks;

};

const getDatesLength = month => {

  if (month === 1) {

    return 28;

  }

  if ([3, 5, 8, 10].includes(month)) {

    return 30;

  }

  return 31;

}

const getDatesForMonth = (month, firstDayOfMonth) => {

  const datesLength = getDatesLength(month);

  const dates = Array.from(Array(datesLength), (d, i) => i + 1);

  const datesOffset = Array.from(Array(firstDayOfMonth), () => 0);

  return datesOffset.concat(dates);

}

export const makeCalendar = (year, month) => {

  month -= 1; //converting to zero-based index

  const date = new Date(year, month, 1);

  const firstDayOfMonth = date.getDay();

  const datesForMonth = getDatesForMonth(month, firstDayOfMonth);

  const calendar = {

    year,

    month: MONTHS[month],

    dates: splitIntoWeeks(datesForMonth)

  };

  return calendar;

}
