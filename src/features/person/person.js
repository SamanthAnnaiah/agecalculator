import { useDispatch, useSelector } from "react-redux";
import { LabelHead } from "../../LabelHead";
import { useAgeHooks } from "../../useAgeHooks";
import { createPerson, updatePerson } from "./personSlice";

export function Person() {

    let personreducer = useSelector(store => store.personreducer)
    let dispatch = useDispatch();
    let { inp } = useAgeHooks();

    return (
        <div className="division1">
            <div className="mtp1">
                <LabelHead label={"PersonSection"} />
            </div>
            <div className="mtp1">
                <div className='button-3' onClick={() => dispatch(createPerson("samanth", 34))}>
                    PersonCreate
                </div>
                <LabelHead label={personreducer.thename} />
            </div>
            <div className="mtp1">
                <div className='button-3' onClick={() => dispatch(updatePerson("Serious"))}>
                    PersonUpdate
                </div>
                <LabelHead label={personreducer.theage} />
            </div>
        </div>
    )
}