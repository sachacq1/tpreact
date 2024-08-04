/* eslint-disable no-unused-vars */
import React from 'react';
import "./SocialLinks.css";

const socialIcons = [
    {
        icon: <i className='bx bx-envelope'></i>,
        url: "mailto:sachacq1@gmail.com",
    },
    {
        icon: <i className='bx bx-phone-call'></i>,
        url: "tel:+5491137787569"
    },
    {
        icon: <i className='bx bxl-linkedin-square'></i>,
        url: "https://ar.linkedin.com/in/sacha-quinteros-71a124128"
    },
    {
        icon: <i className='bx bxl-twitter'></i>,
        url: "https://www.x.com"
    },
    {
        icon: <i className='bx bxl-github'></i>,
        url: "https://github.com/sachacq1"
    },
];

const SocialLinks = () => {
    return (
    <div className='cont-social-links'>
        <ul className="social-links">
            {socialIcons.map((icon, index) => (
                <li  key={index}>
                    <a href={icon.url} target="_blank" rel="noopener noreferrer">
                        {icon.icon}
                    </a>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default SocialLinks;