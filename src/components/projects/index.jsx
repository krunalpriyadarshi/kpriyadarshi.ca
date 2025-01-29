import React from "react";
import "./projects.css";

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <div className="project-info">
                    <h2>
                        Job-Port
                        <a
                            href="https://github.com/krunalpriyadarshi/JobPort"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit", padding: "0 20px" }}
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </h2>
                    <p>
                        <b>Designed</b> and <b>developed</b> a dynamic Job Portal application, enabling seamless interaction between Job Seekers, 
                        Recruiters, and Admins, resulting in a 20% increase in user engagement.
                        <br />
                        Implemented <b>Role-based access control (RBAC)</b> rendering and authorization, simplifying access management and 
                        reducing frontend complexity by 40%.
                        <br />
                        Wrote a client-server based CLI application for easy data retrieval and manipulation in the database, providing 
                        statistical insights.
                    </p>
                    <div className="technologies">
                        <div className="title">Technologies used:</div>
                        <div className="icons">
                            <i className="fab fa-java" title="Java"></i>
                            <i className="fab fa-node-js" title="Node.js"></i>
                            <i className="fab fa-react" title="React.js"></i>
                            <i className="fab fa-aws" title="AWS"></i>
                            <i className="fas fa-database" title="Database"></i>
                            <i className="fab fa-docker" title="Docker"></i>
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
                    <h2>AWS DynamoDB with Lambda</h2>
                    <p>
                        Handled 2+ GB CSV upload to S3 and integrated DynamoDB via Lambda, demonstrating strong big data handling and processing skills.
                        <br/>
                        Explored 4 distributed system features like auto-scaling, replication, partitioning, fault-tolerance.
                        <br/>
                        Gained hands-on expertise in AWS services, serverless architecture, data storage, and cloud computing.
                    </p>
                    <div className="technologies">
                        <div className="title">Technologies used:</div>
                        <div className="icons">
                            <i className="fab fa-aws" title="AWS"></i>
                            <text>DynamoDB</text>
                            <text>Lambda</text>
                            <text>S3</text>
                            <text>CloudWatch</text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-info">
                    <h2>Code Quality Report Analyzer </h2>
                    <p>
                        Developed a Web Application using React, Java and Python to analyze the quality of a GitHub Repository.
                        <br/>
                        Implemented 3 CI/CD pipelines using GitLab and Docker, for automation of build, test, and deployment stages.
                        <br/>
                        Achieved over 90% test coverage with JUnit and Mockito, applying Test-Driven Development (TDD) methodology.
                    </p>
                    <div className="technologies">
                        <div className="title">Technologies used:</div>
                        <div className="icons">
                            <i className="fab fa-java"></i>
                            <i className="fab fa-python"></i>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-aws"></i>
                            <i className="fab fa-gitlab"></i>
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
