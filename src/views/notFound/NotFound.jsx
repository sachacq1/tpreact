import Layout from "../../components/layout/Layout.jsx";
import "./NotFound.css"
import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
 
    return (
        <Layout>
          <main className="main-notFound">
      <img className="notFound" src="./imagen.png" alt="imagen de codigo" />
     <div className="cont-notFound">
     <h1>NotFound</h1>
     <p>Pagina no encontrada, vuelve al</p><p> <Link to="/">Inicio</Link></p>
     </div>
      </main>
        </Layout>
    )
};
export default NotFound