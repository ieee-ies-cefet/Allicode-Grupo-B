import "../styles/accountform.css";

function AccountForm() {
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
          <label htmlFor="perfil" className="label-orange">ALTERAR SENHA</label>
          <textarea
            name="perfil"
            id="perfil"
            placeholder="PERFIL"
          />
        </div>

        <button type="button" className="btn-enviar">
          ENVIAR
        </button>
        
      </form>
    </div>
  );
}

export default AccountForm;