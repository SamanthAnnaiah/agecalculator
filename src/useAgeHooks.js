import { useEffect, useRef, useState } from "react";

export function useAgeHooks() {
    let [day, setday] = useState(0);
    let [month, setmonth] = useState(0);
    let [year, setyear] = useState(0);

    let inp = useRef(null);
    let incount = useRef(0);
    let [showout, setshowout] = useState(false);

    let [outday, setoutday] = useState(0);
    let [outmonth, setoutmonth] = useState(0);
    let [outyear, setoutyear] = useState(0);
    let [bcount, setbcount] = useState(0);
    let [mount, setmount] = useState(false);
    let [zodiacimage, setzodiacimage] = useState(" ");
    let [zodiacname, setzodiacname] = useState(" ");
    let [zdisplay, setzdisplay] = useState(false);

    useEffect(
        () => {
            if (day > 0 || month > 0 || year > 0) {
                console.log("continue mounting");
                incount.current = incount.current + 1;
                setbcount(() => incount.current);
            }
            return (() => {
                console.log("clean up")
            })
        }
        , [outday, outmonth, outyear]
    )

    return {
        day, setday, month, setmonth, year, setyear, inp, showout,
        setshowout, outday, setoutday, outmonth, setoutmonth, outyear, setoutyear, bcount,
        zodiacimage, setzodiacimage, zodiacname, setzodiacname, zdisplay, setzdisplay
    }
}


