import React from "react";
import cpo from "../assets/iphoneCpo.png";
import star from "../assets/stars.png";
import apple from "../assets/appleLogo.png";
import shield from "../assets/shield.png";

function Cpo() {
  return (
    <div className="cpo-container">
      <img src={cpo} alt="" className="cpo-img" />
      <div className="cpo-container__text">
        <h1 className="cpo-container__text--tittle">
          {" "}
          <span className="highlight">CPO</span> (Apple Refurbished)
        </h1>
        <p className="cpo-container__text--subtittle">
          Modelos que não passaram em algum teste de fábrica são cuidadosamente
          <span className="highlight">ajustados pela própria Apple </span> e
          vendidos como novos.
        </p>
        <div className="lacrado-container__text--subtittle">
          <p>
            <img src={star} alt="" className="lacrado-icon" />
            Aparelho 100% <span className="highlight">Novo</span>
          </p>
          <p>
            <img src={apple} alt="" className="lacrado-icon" />
            Qualidade Apple <span className="highlight">Lacrado</span>
          </p>
          <p>
            <img src={shield} alt="" className="lacrado-icon" />1 Ano de
            Garantia <span className="highlight">Oficial Apple</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cpo;
