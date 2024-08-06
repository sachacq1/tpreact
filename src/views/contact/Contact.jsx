/* eslint-disable no-unused-vars */
import Layout from "../../components/layout/Layout.jsx"
import { useUser } from "../../context/useContext.jsx";

import "./Contact.css"
const Contacto = () => {
  const { userData } = useUser();
  console.log("Contacto userData:", userData);
  return (
    <Layout>
      <section className="main-contact">

        <div className="cont-form">
          <div className="name">
            {userData && userData.name ? (
              <div className="hiName">
                <h1>
                  Bienvenid@ {userData.name}
                  <br />
                  Dejame tu mensaje
                </h1>
              </div>)
              :
              (
                <div className="hiName">
                  <h1>Bienvenido</h1>
                </div>
              )}
          </div>
          <form className="form" action="https://formsubmit.co/quinteros@finrap.com.ar" method="POST">
            <div>
              <input type="hidden" name="userName" value={userData?.name || ''} />
              <label >Correo Electrónico:</label>
              <input placeholder="Ingrese su correo electronico"
                type="email"
                className="email"
                name="email"
                required
              />
              <label>Teléfono:</label>
              <input
                placeholder="Ingrese su telefono"
                type="tel"
                className="phone"
                name="phone"
                required
              />
              <label>Mensaje:</label>
              <textarea placeholder="Ingrese su mensaje"
                className="textarea"
                name="message"
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </Layout>
  )
};

export default Contacto