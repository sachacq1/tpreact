/* eslint-disable no-unused-vars */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home.jsx";
import Contacto from "../views/contact/Contact.jsx"
import React from "react";
import Portfolio from "../views/portfolio/Portfolio..jsx";

const Router = () => {
    return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacto />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;