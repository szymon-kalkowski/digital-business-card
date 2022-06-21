import ig from '../images/ig.svg'
import gh from '../images/gh.svg'
import fb from '../images/fb.svg'

export default function Header() {
    return (
        <footer>
            <a href="https://github.com/szymon-kalkowski" target="_blank" rel="noreferrer"><img src={gh} alt="gitHubLogo"/></a>
            <a href="https://www.instagram.com/foxtrygraphics/" target="_blank" rel="noreferrer"><img src={ig} alt="instagramLogo"/></a>
            <a href="https://www.facebook.com/szymon.kalkowski.9" target="_blank" rel="noreferrer"><img src={fb} alt="facebookLogo"/></a>
        </footer>
    )
}