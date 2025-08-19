import React from "react";
import Banner from "./Banner";
import Heather from "./Heather";
import BenefitItemList from "./BenefitItemList";
import Lacrado from "./Lacrado";
import Cpo from "./Cpo";
import OpenBox from "./OpenBox";
import SemiNovos from "./SemiNovos";
import useFadeInOnScroll from "../scripts/useFadeInOnScroll";
import AvaliacoesList from "./AvaliacoesList";
import WhatsAppButton from "./WhatsAppButton";
import Mapa from "./Mapa";
import Rodape from "./Rodape";
import Pagamentos from "./Pagamentos";

function Main() {
  const [refBenefit, visibleBenefit] = useFadeInOnScroll();
  const [refLacrado, visibleLacrado] = useFadeInOnScroll();
  const [refCpo, visibleCpo] = useFadeInOnScroll();
  const [refOpenBox, visibleOpenBox] = useFadeInOnScroll();
  const [refSemiNovos, visibleSemiNovos] = useFadeInOnScroll();

  return (
    <>
      <Heather />
      <Banner />

      <div className="benefits-tittle" id="benefits">
        <h1>
          Nosso <span className="highlight">Diferencial</span>
        </h1>
      </div>

      <div
        ref={refBenefit}
        style={{
          opacity: visibleBenefit ? 1 : 0,
          transform: visibleBenefit ? "translateY(0)" : "translateY(60px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <BenefitItemList />
      </div>

      <div className="iphones-container" id="produtos">
        <div
          ref={refLacrado}
          style={{
            opacity: visibleLacrado ? 1 : 0,
            transform: visibleLacrado ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <Lacrado />
        </div>

        <div
          ref={refCpo}
          style={{
            opacity: visibleCpo ? 1 : 0,
            transform: visibleCpo ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <Cpo />
        </div>

        <div
          ref={refOpenBox}
          style={{
            opacity: visibleOpenBox ? 1 : 0,
            transform: visibleOpenBox ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <OpenBox />
        </div>

        <div
          ref={refSemiNovos}
          style={{
            opacity: visibleSemiNovos ? 1 : 0,
            transform: visibleSemiNovos ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <SemiNovos />
        </div>
      </div>
      <AvaliacoesList />
      <WhatsAppButton />
      <Pagamentos />
      <Mapa />
      <Rodape />
    </>
  );
}

export default Main;
