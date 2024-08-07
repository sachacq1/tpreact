/* eslint-disable no-unused-vars */
import React from 'react';

const projects = [
    {
        name: "Tienda virtual",
        url: "https://guitarstore-web.vercel.app/",
        status: 1,
        description: "Trabajo practico de una tienda virtual de venta de intrumentos",
        tags: ["Primer proyecto", "En desarrollo"]
    },
    {
        name: "Api Harry Potter",
        url: "https://api-hr-11.vercel.app/",
        status: 1,
        description: "Una api de Harry potter donde encontraras todos los personajes",
        tags: ["En desarrollo", "Aprendiendo JS"]
    }
];

const Projects = () => {
    return (
        <section className='cont-project-list'>
            <h2 className="text-bold">Proyectos</h2>
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
        </section>
    );
};

export default Projects;