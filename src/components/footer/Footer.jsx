import "./Footer.css"
const Footer = () => {
 
    return (
        <footer className="footer">
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
        <p className="footer-text">© 2024. Todos los derechos reservados.</p>
      </footer>
    )
    
};

export default Footer;