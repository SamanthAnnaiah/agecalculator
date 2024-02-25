import { LabelHead } from './LabelHead';
import { Imager } from './Imager';
import './ageStyle.css';
import { useRef, useState } from 'react';
import { AgeInput } from './AgeInput';

function App() {
  let [day, setday] = useState(0);
  let [month, setmonth] = useState(0);
  let [year, setyear] = useState(0);

  let inp = useRef(null);
  let [showout, setshowout] = useState(false);

  let [outday, setoutday] = useState(0);
  let [outmonth, setoutmonth] = useState(0);
  let [outyear, setoutyear] = useState(0);

  const day_seconds = 86400;
  const year_seconds = 31536000;
  let monthsdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function Handleagecalc() {
    let curdate = new Date();
    let curday = curdate.getDate();
    let curmonth = curdate.getMonth() + 1;
    let curyear = curdate.getFullYear();

    let curyear_total = gettotalseconds(curday, curmonth, curyear);
    let birthyear_total = gettotalseconds(day, month, year);
    let ageseconds = curyear_total - birthyear_total;
    let oyear = parseInt(ageseconds / year_seconds);

    let rem_days = parseInt((ageseconds % year_seconds) / day_seconds);
    console.log(rem_days);
    let [omonths, odays] = gettotalmonths(rem_days);

    setshowout(true);
    setoutday(odays);
    setoutmonth(omonths);
    setoutyear(oyear);

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

    function gettotalmonths(rem_days) {
      let minusmonths = 0;
      let minusdays = 0;
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

      return ([parseInt(minusmonths), parseInt(minusdays)]);
    }
  }

  return (
    <>
      <div className='age-calculator'>
        <div className='sub_1'>
          <div>
            <LabelHead label={"BIRTH DAY"} />
            <AgeInput intype={"number"} min={1} max={31} size={2} refer={inp} day={day} setday={setday} />
          </div>
          <div>
            <LabelHead label={"BIRTH MONTH"} />
            <AgeInput intype={"number"} min={1} max={12} size={2} day={month} setday={setmonth} />
          </div>
          <div>
            <LabelHead label={"BIRTH YEAR"} />
            <AgeInput intype={"number"} min={1} max={2024} size={4} day={year} setday={setyear} />
          </div>
        </div>
        <div className='liner'>
          <hr />
          <Imager source={"/tempsearch.png"} alternate={"image of a button"} wd={"80px"} ht={"90px"} agecalc={Handleagecalc} />
        </div>
        {showout && (
          <article>
            <div>
              <span className='output'>{outyear}</span>
              &nbsp;
              <span className='output_label'>years</span>
            </div>
            <div>
              <span className='output'>{outmonth}</span>
              &nbsp;
              <span className='output_label'>months</span>
            </div>
            <div>
              <span className='output'>{outday}</span>
              &nbsp;
              <span className='output_label'>days</span>
            </div>
          </article>)}
      </div>
    </>
  );
}

export default App;
