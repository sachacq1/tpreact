/* eslint-disable no-unused-vars */
import React from 'react';

const works = [

    {
        name: "Cives",
        yearStart: 2009,
        yearEnd: 2011,
        role: "Chofer de Transporte Interno",
        description: "En Cives, desempeñé el rol de Chofer de Transporte Interno, siendo responsable del traslado seguro y eficiente de mis compañeros de trabajo a sus destinos designados. Mi posición requería una atención meticulosa a la planificación de rutas y horarios, garantizando que todos los desplazamientos se realizaran conforme a las necesidades operativas de la empresa."
    },
    {
        name: "Financie Rapido",
        yearStart: 2012,
        yearEnd: 0,
        role: "Empleado administrativo",
        description: "En Financie Rápido, una empresa líder en el sector de créditos para consumo, he avanzado significativamente desde mi rol inicial como cadete hasta mi posición actual como Especialista en Atención y Evaluación de Créditos. Nuestra empresa facilita el acceso a financiamiento para la compra de productos en comercios asociados, como tiendas de ropa, mediante préstamos personalizados."
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