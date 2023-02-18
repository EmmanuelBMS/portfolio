import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="section-main-div">
          <div>
            <h3>Olá, sou o Emmanuel.</h3>
            <title>Desenvolvedor de sites, apps e jogos.</title>
            <h1>Desenvolvedor de sites, apps e jogos.</h1>
          </div>
          <div>
            <main>
              Sou um desenvolvedor full-stack, apaixonado por tecnologia e em especial jogos.
              Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
