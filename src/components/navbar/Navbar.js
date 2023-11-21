import { NavLink } from "react-router-dom";
import BtnDarkMode from "../buttonDarkMode/BtnDarkMode";
import "./navbar-style.css";

function Navbar() {
    const activeLink = "nav-list__link nav-list__link--active";
    const nonActivelink = "nav-list__link";


    return (
        <div>
            <nav className="nav">
        <div className="container">
                    <div className="nav-row">
                        <NavLink to="/" className="logo">
                            <strong>Freelancer</strong> portfolio
                        </NavLink>
                        
                <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/" className={({ isActive }) => {
                                    return isActive ? activeLink : nonActivelink
                                }}>
                                    Home
                                </NavLink>  
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/projects" className={({ isActive }) => {
                                    return isActive ? activeLink : nonActivelink
                                }}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/contacts" className={({ isActive }) => {
                                    return isActive ? activeLink : nonActivelink
                                }}>
                                    Contacts
                                </NavLink>
                            </li>

                                             <BtnDarkMode />
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar;