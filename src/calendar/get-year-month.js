import { YEARS } from  './years-months-days';
import { parseQuery } from './../parse-query';

const getYear = (y, year) => (!!y && y >= YEARS[0] && y <= YEARS[YEARS.length - 1]) ? y : year;

const getMonth = (m, month) => (!!m && m >= 1 && m <= 12) ? m : month;

export const getYearMonth = searchQuery => {
    
  const date = new Date();
	
	let year = date.getFullYear(), 
		month = date.getMonth() + 1;

    if (searchQuery) {
     
      const {y, m} = parseQuery(searchQuery);

      year = getYear(Number(y), year);

      month = getMonth(Number(m), month);

    }	

    return {
    	year,
    	month
    };

};