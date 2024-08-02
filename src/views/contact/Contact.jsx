import Layout from "../../components/layout/Layout.jsx"
import { useUser } from "../../context/useContext.jsx";
import "./Contact.css"
const Contacto = () => {
    const { userData } = useUser();

    return (
        <Layout>
          <section className="main">
            
       <div className="cont-form">
       <div className="name">
        {userData.name ? (
        <div className="hiName">
          <h1>Hola {userData.name} <br />Bienvenido</h1>
        </div>
      ) : (
        ""
      )}
        </div>  
       <form className="form">
        <div>
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