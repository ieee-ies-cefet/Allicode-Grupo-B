import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        IEEE Industrial Electronics Society
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