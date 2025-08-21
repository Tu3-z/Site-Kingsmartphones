import React from "react";
import pag from "../assets/metodos.png";

function Pagamentos() {
  return (
    <div className="pagamentos-container">
      <h1>Métodos de Pagamento</h1>
      <img src={pag} alt="" className="metodos-pagamento" />
    </div>
  );
}

export default Pagamentos;
