import "./../../styles/main.css";
import { IoLocationOutline } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri"


function Main() {
    return (
        <div>
            <main className="section">
                <div className="container">
                <h1 className="title-1">Contacts <RiContactsLine className="icons"/></h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location<IoLocationOutline className="icons" /></h2>
                        <p><a href="http://surl.li/mdrxr" target="blank">Lviv, Ukraine</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram<LiaTelegramPlane className="icons"/> / WhatsApp <IoLogoWhatsapp className="icons"/> </h2>
                        <p><a href="tel:+380683327366" target="blank">+38 (068) 332 7366</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email <AiOutlineMail className="icons"/></h2>
                        <p><a href="mailto:nazariy04z@gmail.com" target="blank">nazariy04z@gmail.com</a></p>
                    </li>
                        </ul>
        </div>
    </main>
        </div>
    )
}

export default Main;