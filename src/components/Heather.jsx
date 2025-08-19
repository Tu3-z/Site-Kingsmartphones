import React, { useState } from "react";
import logo from "../assets/logoK.png";

const Heather = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="" />
      </div>

      <nav className={`navbar__menu ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() =>
            document
              .getElementById("banner")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Início
        </button>
        <button
          onClick={() =>
            document
              .getElementById("benefits")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Nossos Beneficios
        </button>
        <a
          href="https://www.instagram.com/kingsmartphones/"
          className="instagram-text"
        >
          Instagram
        </a>
        <button
          onClick={() =>
            document
              .getElementById("produtos")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Produtos
        </button>
        <button
          onClick={() =>
            document
              .getElementById("mapa")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Endereço
        </button>

        <button
          onClick={() =>
            document
              .getElementById("clientes")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Clientes
        </button>
        <a
          href="https://api.whatsapp.com/send/?phone=5511991594636&text&type=phone_number&app_absent=0"
          className="buy-button"
        >
          Compre Agora
        </a>
      </nav>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "rotate-top" : ""}`}></div>
        <div className={`bar ${menuOpen ? "fade-out" : ""}`}></div>
        <div className={`bar ${menuOpen ? "rotate-bottom" : ""}`}></div>
      </div>
    </header>
  );
};

export default Heather;
