/* eslint-disable no-unused-vars */
import "./Portfolio.css"
import Layout from "../../components/layout/Layout";
import { useUser } from "../../context/useContext.jsx";
import Projects from "../../components/proyectos/proyectos.jsx";
import Works from "../../components/trabajos/trabajo.jsx";
import Education from "../../components/educacion/educacion.jsx";
import SocialLinks from "../../components/socialLinks/SocialLinks.jsx";
import Aptitudes from "../../components/aptitudes/Aptitudes.jsx";
import "./Portfolio.css"


const Portfolio = () => {
    const { userData } = useUser();
    console.log(userData)
    return (

        <Layout>
            <main className="main-portfolio">
                <section className="s-header">
                    <div>
                        <h1>Sacha Claudio Emmanuel Quinteros</h1>
                        <h2>Fullstack Developer</h2>

                        <i className='bx bx-world'></i>
                        <span>Ciudad Autonoma de Buenos Aires, Argentina</span>
                        <ul id="social-list"></ul>
                    </div>
                    <div className="cont-img">
                        {/* <img src="/assets/image/images.png" alt="Imagen de perfil" title="Foto de perfil"> */}
                    </div>

                </section>
                <SocialLinks />
                <section className="s-bio">
                    <h2 className="text-bold">Sobre mi</h2>
                    <p>Actualmente trabajando en Financie Rápido, donde comencé como cadete y ahora me dedico a la gestión de créditos. Mi interés por el desarrollo de software me llevó a estudiar una diplomatura en Full Stack Development en la Universidad Tecnológica Nacional (UTN). Además, he ampliado mis conocimientos a través de cursos en línea en plataformas como Ademass y freeCodeCamp, donde he obtenido certificados en HTML, CSS, JavaScript, GitHub, React y Node.js. </p>
                </section>
                <Works />
                <Education />
                <Aptitudes />
                <Projects />
            </main>
        </Layout>

    )
};

export default Portfolio