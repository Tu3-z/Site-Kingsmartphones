import React from "react";
import iphone from "../assets/iphoneLacrado.png";
import star from "../assets/stars.png";
import apple from "../assets/appleLogo.png";
import shield from "../assets/shield.png";
import logoNegativa from "../assets/logoKnegativo.png";
function Lacrado() {
  return (
    <div className="lacrado-container">
      <div className="lacrado-container__tittle">
        <h1>
          Produtos <img src={logoNegativa} alt="" />
        </h1>
        <p>Especificações dos Iphones que vendemos</p>
      </div>
      <div className="lacrado-container__display">
        <img src={iphone} alt="" className="lacrado-container__img" />
        <div className="lacrado-container__text">
          <h1 className="lacrado-container__text--tittle">
            Lacrado <span className="highlight">(NOVO)</span>
          </h1>
          <div className="openbox-container__text--subtittle">
            <p>
              iPhones 100% novos, lacrados de fábrica e com garantia oficial
              Apple de 1 ano.{" "}
              <span className="highlight">
                Qualidade máxima, direto da fonte.
              </span>
            </p>
          </div>
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
    </div>
  );
}

export default Lacrado;
