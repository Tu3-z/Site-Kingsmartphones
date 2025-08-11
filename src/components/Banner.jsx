import bannerP from "../assets/bannerMobile.png"
import bannerG from "../assets/iphoneBanner.png"

function Banner() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={bannerG} />
      <img src={bannerP} alt="Imagem responsiva" className="bannerMobile"/>
    </picture>
  );
};

export default Banner;
