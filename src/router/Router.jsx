/* eslint-disable no-unused-vars */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home.jsx";
import Contacto from "../views/contact/Contact.jsx"
import React from "react";
import { UserProvider } from "../context/useContext.jsx";

const Router = () => {
    return (
        <UserProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacto />}/>
            </Routes>
        </BrowserRouter>
        </UserProvider>
    );
};

export default Router;