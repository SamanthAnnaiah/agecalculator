
const day_seconds = 86400;
const year_seconds = 31536000;
let monthsdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let zodiacs = [
    {
        range: ["0101", "0119"],
        zname: "capricorn"
    },
    {
        range: ["0120", "0218"],
        zname: "aquarius"
    },
    {
        range: ["0219", "0320"],
        zname: "pisces"
    },
    {
        range: ["0321", "0419"],
        zname: "aries"
    },
    {
        range: ["0420", "0520"],
        zname: "taurus"
    },
    {
        range: ["0521", "0620"],
        zname: "gemini"
    },
    {
        range: ["0621", "0722"],
        zname: "cancer"
    },
    {
        range: ["0723", "0822"],
        zname: "leo"
    },
    {
        range: ["0823", "0922"],
        zname: "virgo"
    },
    {
        range: ["0923", "1022"],
        zname: "libra"
    },
    {
        range: ["1023", "1122"],
        zname: "scorpio"
    },
    {
        range: ["1123", "1222"],
        zname: "sagitarius"
    },
    {
        range: ["1223", "1231"],
        zname: "capricorn"
    }
]

let curdate = new Date();
let curday = curdate.getDate();
let curmonth = curdate.getMonth() + 1;
let curyear = curdate.getFullYear();

export { day_seconds, year_seconds, monthsdays, curdate, curday, curmonth, curyear, zodiacs };