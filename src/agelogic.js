import { day_seconds, year_seconds, monthsdays, curdate, curday, curmonth, curyear } from './agecopybook';

function gettotalseconds(curday, curmonth, curyear) {
    if (curyear % 4 === 0) {
        monthsdays.splice(1, 1, 29);
    }
    let curmonth_total = monthsdays.slice(0, curmonth - 1).reduce((acc, days) => acc + days * 86400, 0)
    curmonth_total = curmonth_total + (curday * day_seconds);
    let curyear_total = (curyear - 1) * year_seconds;
    curyear_total = curyear_total + curmonth_total + (parseInt(curyear / 4) * day_seconds);
    return curyear_total;
}

function gettotalmonths(rem_days, month) {
    let minusmonths = 0;
    let minusdays = 0;
    console.log(day_seconds);
    console.log(curday);
    console.log(curmonth);
    if (month < curmonth) {
        let narray = monthsdays.filter((item, index) => (index >= month - 1) && (index <= curmonth - 1));
        console.log(narray);
        let sarray = narray.reduce(((acc, item) => acc + item), 0)
        console.log(sarray);
        if (sarray > rem_days) {
            minusmonths = narray.length - 1;
            minusdays = narray.pop();
        }
        if (sarray === rem_days) {
            minusmonths = narray.length;
            minusdays = 0;
        }
        if (sarray < rem_days) {
            minusmonths = narray.length;
            minusdays = rem_days - sarray;
        }
    }

    if (month === curmonth) {
        minusmonths = 0;
        minusdays = rem_days;
    }

    if (month > curmonth) {
        let barray = monthsdays.filter((item, index) => (index >= month - 1) && (index <= 12));
        let carray = monthsdays.filter((item, index) => (index >= 0) && (index <= curmonth - 1));
        let narray = [...barray, ...carray];
        let sarray = narray.reduce(((acc, item) => acc + item), 0)
        console.log(sarray);
        if (sarray > rem_days) {
            minusmonths = narray.length - 1;
            minusdays = narray.pop();
        }
        if (sarray === rem_days) {
            minusmonths = narray.length;
            minusdays = 0;
        }
        if (sarray < rem_days) {
            minusmonths = narray.length;
            minusdays = rem_days - sarray;
        }
    }

    return [minusmonths, minusdays];
}

export { gettotalmonths, gettotalseconds };
