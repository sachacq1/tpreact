/* eslint-disable react/no-unknown-property */

import "./Header.css";

const Header = () => {
 
    return (
        <header className="header">
      <div className="logo">
      <i class='bx bxs-mouse-alt'></i>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
    )
    
};

export default Header;