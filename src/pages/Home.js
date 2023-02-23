import React, { useContext } from 'react';
import Footer from '../components/Footer';
import '../styles/pages/Home.css';
import { PortfolioContext } from '../context/PortfolioContext';

function Home() {
  const {
    handleResize,
  } = useContext(PortfolioContext);

  return (
    <div>
      {handleResize()}
      <section className="section">
        <div className="section-main-div">
          <div className="section-main-div-titles">
            <h3>Olá, sou o Emmanuel.</h3>
            <title>Desenvolvedor de sites, apps e jogos.</title>
            <h1>Desenvolvedor de sites, apps e jogos.</h1>
          </div>
          <div className="about-main-div">
            <main>
              <div>
                <h2>
                  Sobre mim
                </h2>
                <p>
                  Sou um desenvolvedor full-stack, apaixonado por tecnologia e em especial jogos.
                  Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
