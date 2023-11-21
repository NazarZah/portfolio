import gitHubIcon from "./../../img/icons/gitHub-black.svg";
import "./btn-style.css";

function BtnGitHub(props) {
    return (
           <a href={props.link} target="blank" className="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    GitHub repo
                </a>
    )

}

export default BtnGitHub;