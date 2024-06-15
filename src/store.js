import { applyMiddleware, combineReducers, createStore } from "redux";
import { agereducer } from "./features/age/ageSlice";
import { personreducer } from "./features/person/personSlice";
import { thunk } from "redux-thunk";


let rootreducer = combineReducers({
    agereducer: agereducer,
    personreducer: personreducer
})

export let store = createStore(rootreducer, applyMiddleware(thunk));
console.log("REDUX HERE")
