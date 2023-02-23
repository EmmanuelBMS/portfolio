import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/components-styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div-main">
        <div className="footer-div-main-icons">
          <ul>
            <li>
              <a href="https://github.com/EmmanuelBMS" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emmanuelbms/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-auth-div">
          <span>
            Criado e desenvolvido por
          </span>
          <a href="https://github.com/EmmanuelBMS" target="_blank" rel="noreferrer">EmmanuelBMS</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
