
const day_seconds = 86400;
const year_seconds = 31536000;
let monthsdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let curdate = new Date();
let curday = curdate.getDate();
let curmonth = curdate.getMonth() + 1;
let curyear = curdate.getFullYear();

export { day_seconds, year_seconds, monthsdays, curdate, curday, curmonth, curyear };