/* eslint-disable no-unused-vars */
import React from 'react';

const projects = [
    {
        name: "Coca Cola home page",
        url: "http://www.google.com",
        status: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati?",
        tags: ["Elige tu propia aventura", "En desarrollo"]
    },
    {
        name: "Coca Cola home page",
        url: "http://www.google.com",
        status: 0,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati?",
        tags: ["Elige tu propia aventura", "En desarrollo", "Aprendiendo JS"]
    }
];

const Projects = () => {
    return (
        <div className="project-list" >
            {
                projects.map((project, index) => {
                    const stringOfTags = project.tags.map((tag, i) => <li key={i}>{tag}</li>);

                    return (
                        <div className="project" key={index}>
                            <div className="cont-header-project">
                                <h3><a target="_blank" rel="noopener noreferrer" href={project.url}>{project.name}</a></h3>
                                <span className={project.status === 1 ? "production" : ""}></span>
                            </div>
                            <p>{project.description}</p>
                            <ul>{stringOfTags}</ul>
                        </div>
                    );
                })
            }
        </div >
    );
};

export default Projects;