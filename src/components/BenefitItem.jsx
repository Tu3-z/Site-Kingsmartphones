import React from "react";

const BenefitItem = ({ image, tittle, text }) => {
  return (
    <div className="benefititem-container">
      <img src={image} alt="" />
      <h2>{tittle}</h2>
      <p>{text}</p>
    </div>
  );
};

export default BenefitItem;
