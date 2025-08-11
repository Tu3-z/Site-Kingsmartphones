import React from "react";
import iphone from "../assets/IphoneOpenbox.png";
import star from "../assets/stars.png";
import apple from "../assets/appleLogo.png";
import shield from "../assets/shield.png";

function OpenBox() {
  return (
    <div className="openbox-container">
      <div className="lacrado-container__display">
        <div className="openbox-img">
          <img src={iphone} alt="" />
        </div>
        <div className="lacrado-container__text">
          <h1 className="lacrado-container__text--tittle">
            Iphones <span className="highlight">Open Box</span>
          </h1>
          <div className="openbox-container__text--subtittle">
            <p>
              iPhones originais, ativados para testes, mas nunca usados. Com
              garantia Apple ativa e zero manutenções — qualidade de loja por um
              <span className="highlight"> preço menor.</span>
            </p>
            <div className="lacrado-container__text--subtittle">
              <p>
                <img src={star} alt="" className="lacrado-icon" />
                Aparelho Novo, <span className="highlight">Nunca Usado</span>
              </p>
              <p>
                <img src={apple} alt="" className="lacrado-icon" />
                Qualidade Apple <span className="highlight">Garantida</span>
              </p>
              <p>
                <img src={shield} alt="" className="lacrado-icon" />1 Ano de
                Garantia <span className="highlight">Oficial Apple</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenBox;
