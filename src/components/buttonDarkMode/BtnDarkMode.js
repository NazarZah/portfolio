import { useEffect} from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import "./btnDarkMode-style.css";
import sun from "./sun.svg";
import moon from "./moon.svg";

function BtnDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());


    const toggleDarmMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === "light" ? "dark" : "light"
        })

    }

    useEffect(() => {
        if (darkMode === "dark") {
            document.body.classList.add("dark");

        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode])

    const btnNormal = "dark-mode-btn";
    const btnActive = "dark-mode-btn dark-mode-btn--active";

    return (
        <div>
            <button className={darkMode === "dark" ? btnActive : btnNormal} onClick={toggleDarmMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>
        </div>
    )
}

export default BtnDarkMode;