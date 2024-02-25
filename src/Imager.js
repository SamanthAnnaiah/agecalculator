import './ageStyle.css';

export function Imager({ source, alternate, wd, ht, agecalc }) {
    return (
        <img className='image_adjust pointer' src={source} alt={alternate} width={wd} height={ht} onClick={agecalc} />
    )
}