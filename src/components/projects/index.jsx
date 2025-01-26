import React from "react";
import "./projects.css";

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <div className="project-info">
                    <h2>Project 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in odio at ligula aliquet tempus. Nullam id mi
                        auctor, tempus tortor nec, vestibulum nunc. Nullam in
                        purus nec eros fermentum tincidunt. Nullam in purus nec
                        eros fermentum tincidunt. Nullam in purus nec eros
                        fermentum tincidunt.
                    </p>
                    <div className="technologies">
                        <div className="title">Technologies used:</div>
                        <div className="icons">
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-aws"></i>
                            <i className="fab fa-docker"></i>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img
                        src="https://images.unsplash.com/photo-1734597949864-0ee6637b0c3f?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project 1"
                    />
                </div>
            </div>
            <div className="project">
                <div className="image">
                    <img
                        src="https://images.unsplash.com/photo-1700498404356-093d69ba394d?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project 1"
                    />
                </div>
                <div className="project-info">
                    <h2>Project 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in odio at ligula aliquet tempus. Nullam id mi
                        auctor, tempus tortor nec, vestibulum nunc. Nullam in
                        purus nec eros fermentum tincidunt. Nullam in purus nec
                        eros fermentum tincidunt. Nullam in purus nec eros
                        fermentum tincidunt.
                    </p>
                    <div className="technologies">
                        <div className="title">Technologies used:</div>
                        <div className="icons">
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-aws"></i>
                            <i className="fab fa-docker"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-info">
                    <h2>Project 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in odio at ligula aliquet tempus. Nullam id mi
                        auctor, tempus tortor nec, vestibulum nunc. Nullam in
                        purus nec eros fermentum tincidunt. Nullam in purus nec
                        eros fermentum tincidunt. Nullam in purus nec eros
                        fermentum tincidunt.
                    </p>
                    <div className="technologies">
                        <div className="title">Technologies used:</div>
                        <div className="icons">
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-aws"></i>
                            <i className="fab fa-docker"></i>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img
                        src="https://images.unsplash.com/photo-1731600800640-6d5864aaaac4?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project 1"
                    />
                </div>
            </div>
        </div>
    );
}
export default Projects;
