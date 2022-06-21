import foxtry from '../images/foxtry.png'
import linkedin from '../images/in.png'

export default function Buttons() {
    return (
        <div className="buttonsContainer">
            <a href="https://www.foxtry.pl/" target="_blank" className="fxbtn" rel="noreferrer"><img src={foxtry} alt="foxtryLogo"/>Website</a>
            <a href="https://www.linkedin.com/in/szymon-kalkowski-075a89236/" target="_blank" className="inbtn" rel="noreferrer"><img src={linkedin} alt="linkedinLogo"/>LinkedIn</a>
        </div>
    )
}