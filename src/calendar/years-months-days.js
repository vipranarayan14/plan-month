const getYears = (from, to) => {
	return Array(to - from + 1).fill().map((_, i) => from + i);
};

export const YEARS = getYears(2018, 2020);

export const MONTHS = [
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

export const DAYS = [
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday', 
  'Saturday'
];