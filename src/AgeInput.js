import './ageStyle.css';
export function AgeInput({ intype, min, max, size, refer = null, day = 0, setday = "" }) {

    function Handleinchanger(event) {
        inchanger(event.target.value, min, max, size)
    }

    function inchanger(val1, min, max, size) {
        let val = Number(val1);
        if (val.length > size || val < Number(min) || val > Number(max)) {
            setday('');
        } else {
            setday(val);
        }
    }

    function Handleinfocus(event) {
        infocuser(event.target.value, setday);
    }

    function infocuser(val, setday) {
        if (Number(val) === 0) {
            setday('');
        }
    }

    function Handleinblur(event) {
        inblurer(event.target.value, setday);
    }

    function inblurer(val, setday) {
        if (!(val.length)) {
            setday(0);
        }
    }

    return (
        <input className='input-field' type={intype} value={day} ref={refer} name="" id="" onChange={Handleinchanger} onFocus={Handleinfocus} onBlur={Handleinblur} />
    )
}

