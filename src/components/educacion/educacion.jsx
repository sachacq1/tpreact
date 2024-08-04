/* eslint-disable no-unused-vars */
import React from 'react';

const educationTitle = [
    {
        name: "UTN",
        yearStart: 2024,
        yearEnd: 0,
        role: "Full stack developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
    },
    {
        name: "IMM",
        yearStart: 2006,
        yearEnd: 2008,
        role: "Bachiller",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
    }
];

const Education = () => {
    return (
        <div className="education-list">
            {educationTitle.map((education, index) => (
                <div key={index}>
                    <div className="cont-name-education">
                        <h3><a href="#">{education.name}</a></h3>
                        <h4>{education.yearStart} - {education.yearEnd !== 0 ? education.yearEnd : "Actualidad"}</h4>
                    </div>
                    <h4>{education.role}</h4>
                    <p>{education.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Education;