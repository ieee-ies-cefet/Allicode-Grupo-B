import Header from "../components/header";
import Footer from "../components/footer";
import FeaturesGrid from "../components/featuresgrid";
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

        <FeaturesGrid />
      </main>

      <Footer />
    </>
  );
}

export default Home;