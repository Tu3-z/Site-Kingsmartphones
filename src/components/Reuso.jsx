import React from "react";
import reuso from "../assets/retorna.png";

function Reuso() {
  return (
    <div className="reuso-container">
      <img src={reuso} alt="" className="icon-reuso" />
      <p>
        Aceitamos o seu Iphone usado como{" "}
        <span className="highlight">forma de pagamento!</span>
      </p>
    </div>
  );
}

export default Reuso;
