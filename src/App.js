import { LabelHead } from './LabelHead';
import { Imager } from './Imager';
import './ageStyle.css';
import { useRef, useState } from 'react';
import { AgeInput } from './AgeInput';
import { gettotalmonths, gettotalseconds } from './agelogic';
import { useAgeHooks } from './useAgeHooks';
import { day_seconds, year_seconds, monthsdays, curdate, curday, curmonth, curyear } from './agecopybook';

function App() {

  let {
    day, setday, month, setmonth, year, setyear, inp, showout,
    setshowout, outday, setoutday, outmonth, setoutmonth, outyear, setoutyear
  } = useAgeHooks();

  function Handleagecalc() {

    let curyear_total = gettotalseconds(curday, curmonth, curyear);
    let birthyear_total = gettotalseconds(day, month, year);
    let ageseconds = curyear_total - birthyear_total;
    let oyear = parseInt(ageseconds / year_seconds);

    let rem_days = parseInt((ageseconds % year_seconds) / day_seconds);
    console.log(rem_days);
    let [omonths, odays] = gettotalmonths(rem_days, month);

    setshowout(true);
    setoutday(odays);
    setoutmonth(omonths);
    setoutyear(oyear);

    return ([parseInt(omonths), parseInt(odays)]);
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
