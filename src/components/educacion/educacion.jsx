/* eslint-disable no-unused-vars */
import React from 'react';

const educationTitle = [
    {
        name: "UTN",
        yearStart: 2024,
        yearEnd: 0,
        role: "Full stack developer",
        description: "Actualmente estoy cursando la Diplomatura en Full Stack Developer en la Universidad Tecnológica Nacional (UTN), donde estoy adquiriendo habilidades avanzadas en el desarrollo de aplicaciones web tanto en el frontend como en el backend. Este programa de estudios intensivo está diseñado para proporcionar una comprensión integral de las tecnologías y metodologías modernas utilizadas en el desarrollo de software."
    },
    {
        name: "IMM",
        yearStart: 2006,
        yearEnd: 2008,
        role: "Bachiller",
        description: "Realicé mis estudios secundarios en el Instituto Mariano Moreno, una institución educativa conocida por su excelencia académica y enfoque integral en la formación de sus estudiantes. Durante este período, adquirí una sólida base educativa que abarcó una amplia gama de materias y habilidades, preparándome para futuros desafíos académicos y profesionales."
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