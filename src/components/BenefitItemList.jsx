import React from "react";
import BenefitItem from "./BenefitItem";
import { iconsArray } from "../assets/database/iconsArray";

const BenefitItemList = ({ image, tittle, text }) => {
  return (
    <div className="benefit-itemlist-container" id="benefits">
      {iconsArray.slice(0, 3).map((currentObj, index) => (
        <BenefitItem
          key={index}
          image={currentObj.image}
          tittle={currentObj.tittle}
          text={currentObj.text}
        />
      ))}
    </div>
  );
};

export default BenefitItemList;
