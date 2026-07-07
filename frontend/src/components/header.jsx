import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="IEEE Industrial Electronics Society" />
      </Link>

      <nav>
        <Link to="#">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/conta">Conta</Link>
        <Link to="#">Projetos</Link>
      </nav>
    </header>
  );
}

export default Header;