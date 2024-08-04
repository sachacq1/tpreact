import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
 
    return (
        <footer className="footer">
        <nav className="nav-menu">
          <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link  to="/contact">Contacto</Link></li>
          <li><Link  to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
        <p className="footer-text">© 2024. Todos los derechos reservados.</p>
      </footer>
    )
    
};

export default Footer;