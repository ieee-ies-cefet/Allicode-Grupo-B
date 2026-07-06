import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Header />

      <main>
        <h1 className="bem-vindo">BEM-VINDO</h1>

        <p className="subtitulo">
          A <span className="iee">IEEE IES</span> transforma desafios em
          soluções de tecnologia.
          <br />
          Ao seu dispor.
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-icon"></div>

            <div className="card-content">
              <h3>Automação Industrial</h3>
              <p>
                Desenvolvemos sistemas que solucionam desafios de automação
                industrial.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon"></div>

            <div className="card-content">
              <h3>Cibersegurança</h3>
              <p>
                Temos como um dos focos de estudo contribuir para a
                cibersegurança.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon"></div>

            <div className="card-content">
              <h3>Jogos Nativos e Desktop</h3>
              <p>
                Cobrimos todas as etapas do desenvolvimento de jogos para
                celular e desktop.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon"></div>

            <div className="card-content">
              <h3>Desenvolvimento Web</h3>
              <p>
                Nossas páginas web incluem desde landing pages a projetos
                complexos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;