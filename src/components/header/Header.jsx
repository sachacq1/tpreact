/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {

    return (
        <header className="header">
      <div className="logo">
      <i className='bx bxs-mouse-alt'></i>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link  to="/contact">Contacto</Link></li>
          <li><Link  to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
    </header>
    )
    
};

export default Header;