import React from "react";
import google from "../assets/database/icons/googleicon.png";
import stars from "../assets/database/icons/stars5.png";

const Avaliacoes = ({ nome, text, pfp }) => {
  return (
    <div className="av-container">
      <div className="av-container--pfp">
        <img src={pfp} alt="" />
        <p>{nome}</p>
        <img src={google} alt="" className="av-container--pfp__google" />
      </div>
      <div className="av-main-content">
        <img src={stars} alt="" className="star" />
        <div className="av-container--text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;
