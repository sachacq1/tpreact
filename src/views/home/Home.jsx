/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import { useUser } from "../../context/useContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Home.css";

 const Home = () => {

    const { userData, updateUser } = useUser();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            updateUser(name);
            setName("");
            navigate("/contact")
        };
    
  return (
    <Layout>
      <div className="main">
      <div className="login-form">
      <h2>¿Como te llamas? </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label  ></label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Ingrese su nombre..."
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
      </div>
    </Layout>
  );
}
export default Home;

