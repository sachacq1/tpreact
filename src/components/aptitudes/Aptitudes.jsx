/* eslint-disable no-unused-vars */
import React from 'react';

const aptitudes = [
    {
        name: "HTML",
       image: "./html-5.png"
    },
    {
        name: "CSS",
       image: "./css-3.png"
    },
    {
        name: "Javascript",
       image: "./JS.png"
    },
    {
        name: "React",
       image: "./react.png"
    },
    {
        name: "Node",
       image: "./node.png"
    },
    
]


const Aptitudes = () => {
    return (
        <div className="aptitudes-list">
            <h2>Aptitudes</h2>
            {aptitudes.map((aptitude, index) => (
                <div className="aptitudes" key={index}>
                    <div className="cont-header-aptitudes">
                        <img src={aptitude.image} alt={aptitude.name}  />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Aptitudes;