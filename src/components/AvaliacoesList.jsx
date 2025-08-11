import React from "react";
import { avaliacoesArray } from "../assets/database/avaliacoesArray";
import Avaliacoes from "./Avaliacoes";

function AvaliacoesList() {
  return (
    <>
      <div className="bg-list" id="clientes">
        <h1 className="av-list--tittle">
          Clientes <span className="highlight">Satisfeitos!</span>
        </h1>
        <div className="av-list-container">
          {avaliacoesArray.slice(0, 10).map((currentObj, index) => (
            <Avaliacoes
              key={index}
              nome={currentObj.nome}
              text={currentObj.text}
              pfp={currentObj.pfp}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AvaliacoesList;
