import Project from "../components/projects/Project";
import { projects } from "../helpers/projectList";
import "./../styles/main.css"


function Projects() {
    return (
        <div>
            <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project) => {
                            return <Project
                                title={project.title}
                                img={project.img}
                                key={project.id}
                                index={project.id}
                            />

                        })}
            </ul>
        </div>
    </main>
        </div>
    )

}


export default Projects;