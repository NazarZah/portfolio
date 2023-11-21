import gitHub from "./../../img/icons/gitHub.svg";
import instagam from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import "./footer-style.css";

function Footer() {
    return (
        <div>
            <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={instagam} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Nazar Zakhariia</p>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer;