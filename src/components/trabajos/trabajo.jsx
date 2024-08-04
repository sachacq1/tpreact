/* eslint-disable no-unused-vars */
import React from 'react';

const works = [

    {
        name: "Cives",
        yearStart: 2009,
        yearEnd: 2011,
        role: "Empleado administrativo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
    },
    {
        name: "Financie Rapido",
        yearStart: 2012,
        yearEnd: 0,
        role: "Empleado administrativo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
    }
];

const Works = () => {
    return (
        <div className="work-list">
            {works.map((work, index) => (
                <div key={index}>
                    <div className="cont-name-work">
                        <h3><a href="#">{work.name}</a></h3>
                        <h4>{work.yearStart} - {work.yearEnd !== 0 ? work.yearEnd : "Actualidad"}</h4>
                    </div>
                    <h4>{work.role}</h4>
                    <p>{work.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Works;