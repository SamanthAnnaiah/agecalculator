import { useDispatch, useSelector } from "react-redux";
import { LabelHead } from "../../LabelHead"
import { useAgeHooks } from "../../useAgeHooks"
import { setboomer, setgenz, setmillenial } from "./ageSlice";

export function Age() {
    let agereducer = useSelector(store => store.agereducer);
    let preducer = useSelector(store => store.personreducer);
    console.log("preducer", preducer);
    let dispatch = useDispatch();

    console.log(agereducer);
    let { inp } = useAgeHooks();

    return (
        <div className="division1">
            <div className="mtp1">
                <LabelHead label={"AgeSection"} />
            </div>
            <div className="mtp1">
                <div className='button-3' onClick={() => dispatch(setboomer(250))}>
                    Boomer
                </div>
                <LabelHead label={agereducer.agetoadd} />
            </div>
            <div className="mtp1">
                <div className='button-3' onClick={() => dispatch(setmillenial(10))}>
                    Millenial
                </div>
                <LabelHead label={agereducer.agetoadd} />
            </div>
            <div className="mtp1">
                <div className='button-3' onClick={() => dispatch(setgenz(34))}>
                    GenZ
                </div>
                <LabelHead label={agereducer.agetoadd} />
            </div>
        </div>
    )
}