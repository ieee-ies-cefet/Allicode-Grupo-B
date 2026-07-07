import "../styles/header.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="IEEE Industrial Electronics Society" />
      </div>

      <nav>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <a href="#">Conta</a>
        <a href="#">Projetos</a>
      </nav>
    </header>
  );
}

export default Header;