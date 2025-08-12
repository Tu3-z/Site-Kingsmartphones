import bannerP from "../assets/bannerMobile.png";
import bannerG from "../assets/bannerPc.png";

function Banner() {
  return (
    <picture className="banner-container" id="banner">
      <source media="(min-width: 885px)" srcSet={bannerG} className="bannerG" />
      <img src={bannerP} alt="Imagem responsiva" className="bannerMobile" />
    </picture>
  );
}

export default Banner;
