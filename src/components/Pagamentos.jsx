import React from "react";
import pag from "../assets/metodos.png";
import reuso from "../assets/retorna.png";

function Pagamentos() {
  return (
    <div className="pagamentos-container">
      <h1>Métodos de Pagamento</h1>
      <img src={pag} alt="" className="metodos-pagamento" />
      <div className="reuso-container">
        <img src={reuso} alt="" className="icon-reuso" />
        <p>
          Aceitamos o seu Iphone usado como{" "}
          <span className="highlight">forma de pagamento!</span>
        </p>
      </div>
    </div>
  );
}

export default Pagamentos;
