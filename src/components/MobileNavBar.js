import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Foto from '../images/profile.png';
import '../styles/components-styles/MobileNavBar.css';

function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="mobile-navbar-father-div">
        <div className="mobile-navbar-foto-title-div">
          <Link to="/"><img src={Foto} alt="foto de EBMS" className="mobile-navbar-photo" /></Link>
          <span>Emmanuel Silva</span>
        </div>
        <div className="mobile-navbar-menu-icon">
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="mobile-menu-div">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MobileNavBar;
