import React from 'react';
import { Link } from 'react-router-dom';
import Foto from '../images/Meu1mb.jpg';

function Home() {
  return (
    <div>
      <div>
        <Link to="/"><img src={Foto} alt="foto de EBMS" /></Link>
      </div>
    </div>
  );
}

export default Home;
