let initialAgeState = {
    agetoadd: 0,
    maturity: ""
}

export function agereducer(cstate = initialAgeState, action) {
    let { type, toadd } = action;
    let aadd = 0;
    let mature = " ";
    switch (type) {
        case "type/boomer":
            aadd = toadd - 40;
            mature = "high";
            return ({ ...cstate, agetoadd: aadd, maturity: mature });
        case "type/millenial":
            aadd = toadd - 20;
            mature = "medium";
            return ({ ...cstate, agetoadd: aadd, maturity: mature });
        case "type/genz":
            aadd = toadd + 60;
            mature = "low";
            return ({ ...cstate, agetoadd: aadd, maturity: mature });
        default:
            return ({ ...cstate })
    }
}

//action creators 
export function setboomer(toadd) {
    return ({ type: "type/boomer", toadd })
}

export function setmillenial(toadd) {
    return async function (dispatch, smstate) {
        let res = await fetch("https://api.agify.io?name=michael");
        let data = await res.json();
        let smname = Number(Number(data.age) - toadd);
        toadd = smname;
        dispatch({ type: "type/millenial", toadd });
    };
}

export function setgenz(toadd) {
    return ({ type: "type/genz", toadd })
}
