import "./header-style.css";
import CV from './Nazariia Zakhariia-4.pdf'

function Header() {
    return (
        <div>
            <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Nazar</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>and I'm looking for the first job .</p>
            </div>
            <a href={CV} target="blank" className="btn">Download CV</a>
        </div>
    </header>
        </div>
    )
}

export default Header;