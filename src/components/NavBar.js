import React from 'react';
import { Link } from 'react-router-dom';
import Foto from '../images/profile.png';
import '../styles/components-styles/NavBar.css';

function NavBar() {
  return (
    <header>
      <div className="header-father-div">
        <div className="header-father-div-title-img">
          <div className="header-father-div-img">
            <Link to="/"><img src={Foto} alt="foto de EBMS" className="header-photo" /></Link>
          </div>
          <div className="header-father-div-title">
            <span className="header-title">Emmanuel Silva</span>
          </div>
        </div>
        <nav>
          <div className="navlinks-main-div">
            <ul>
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              <li>
                <Link to="/services">Serviços</Link>
              </li>
            </ul>
            <div className="div-contact-button">
              <button type="button"><Link to="/contato" className="nav-button">Contato</Link></button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
