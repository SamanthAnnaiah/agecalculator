let initialPersonState = {
    thename: "nil",
    theage: 0,
    thegender: "nil"
}


export function personreducer(pstate = initialPersonState, action) {
    let { type, name } = action;
    switch (type) {
        case "type/createPerson":
            return ({ ...pstate, thename: name, theage: action.age });
        case "type/updatePerson":
            return ({ ...pstate, thename: name });
        default:
            return ({ ...pstate })
    }
}

export function createPerson(name, age) {
    return ({ type: "type/createPerson", name, age })
}

export function updatePerson(name) {
    return ({ type: "type/updatePerson", name })
}