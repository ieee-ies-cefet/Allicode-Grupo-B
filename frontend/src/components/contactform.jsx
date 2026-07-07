import "../styles/contactform.css";

function ContactForm() {
  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        
        <div className="form-group">
          <label htmlFor="nome">NOME</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder="ESCREVA AQUI..."
          />
        </div>

        <button type="button" className="btn-enviar">
          ENVIAR
        </button>
        
      </form>
    </div>
  );
}

export default ContactForm;