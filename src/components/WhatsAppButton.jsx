import React from "react";
import whatsIcon from "../assets/database/icons/whats.png"; // ajuste o caminho conforme seu projeto

const WhatsAppButton = () => {
  const link =
    "https://api.whatsapp.com/send/?phone=5511991594636&text&type=phone_number&app_absent=0"; // Substitua pelo seu número

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
