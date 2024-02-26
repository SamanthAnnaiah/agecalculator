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

    useEffect(
        () => {
            incount.current = incount.current + 1
            console.log("incount", incount.current)
        }
        , [outday, outmonth, outyear]
    )

    return {
        day, setday, month, setmonth, year, setyear, inp, showout,
        setshowout, outday, setoutday, outmonth, setoutmonth, outyear, setoutyear
    }
}


