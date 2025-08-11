import React from "react";
import iphone from "../assets/iphoneSeminovo.png";
import star from "../assets/stars.png";
import apple from "../assets/appleLogo.png";
import shield from "../assets/shield.png";

function SemiNovos() {
  return (
    <div>
      <div className="cpo-container">
        <div className="cpo-container__text">
          <h1 className="cpo-container__text--tittle">
            Semi-Novos <span className="highlight"> Premium</span>
          </h1>
          <p className="cpo-container__text--subtittle">
            Usados, mas em <span className="highlight"> ótimo estado! </span>
            Passam por um rigoroso controle de qualidade, com mais de{" "}
            <span className="highlight"> 70 testes realizados.</span>
          </p>
          <div className="lacrado-container__text--subtittle">
            <p>
              <img src={star} alt="" className="lacrado-icon" />
              Aparelhos com <span className="highlight">ótimo visual</span> e
              100% funcionais.
            </p>
            <p>
              <img src={apple} alt="" className="lacrado-icon" />
              Mais de <span className="highlight">
                70 testes realizados
              </span>{" "}
              antes da venda.
            </p>
            <p>
              <img src={shield} alt="" className="lacrado-icon" />
              <span className="highlight">3 meses</span> de garantia direto com
              a gente.
            </p>
          </div>
        </div>
        <img src={iphone} alt="" className="seminovo-img" />
      </div>
    </div>
  );
}

export default SemiNovos;
