import { useState } from "react";
import "../styles/contactform.css";

function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: nome,
          email,
          message: mensagem
        })
      });

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem.");
    }
  }

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="nome">NOME</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <textarea
            id="mensagem"
            placeholder="ESCREVA AQUI..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-enviar">
          ENVIAR
        </button>

      </form>
    </div>
  );
}

export default ContactForm;