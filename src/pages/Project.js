import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import BtnGitHub from "../components/buttonGitHub/BtnGitHub";
import "./../styles/main.css"




function Project() {

    const { id } = useParams();
    const project = projects[id];

    return (
        <div>
            <main className="section">
        <div className="container">
            <div className="project-details">

                        <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt={project.title} width='300px' height='200px' className="project-details__cover"/>

                <div className="project-details__desc">
                            <p>Skills: { project.skills}</p>
                        </div>

                        {project.link && (
                            <BtnGitHub link={project.link} />
                        )}
            </div>
        </div>
    </main>
        </div>
    )
}


export default Project;