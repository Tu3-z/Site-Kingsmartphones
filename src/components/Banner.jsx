import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Desktop
import banner1 from "../assets/ad1.png";
import banner2 from "../assets/ad2.png";
import banner3 from "../assets/ad3.png";
import banner4 from "../assets/ad4.png";
import banner5 from "../assets/ad5.png";
import banner6 from "../assets/ad6.png";
import banner7 from "../assets/ad7.png";

// Mobile
import bannerM1 from "../assets/ad1-m.png";
import bannerM2 from "../assets/ad2-m.png";
import bannerM3 from "../assets/ad3-m.png";
import bannerM4 from "../assets/ad4-m.png";
import bannerM5 from "../assets/ad5-m.png";
import bannerM6 from "../assets/ad6-m.png";
import bannerM7 from "../assets/ad7-m.png";

function BannerCarousel() {
  const banners = [
    { desktop: banner1, mobile: bannerM1 },
    { desktop: banner2, mobile: bannerM2 },
    { desktop: banner3, mobile: bannerM3 },
    { desktop: banner4, mobile: bannerM4 },
    { desktop: banner5, mobile: bannerM5 },
    { desktop: banner6, mobile: bannerM6 },
    { desktop: banner7, mobile: bannerM7 },
  ];

  return (
    <div className="banner-container" id="banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={800} // velocidade da transição
      >
        {banners.map((b, index) => (
          <SwiperSlide key={index}>
            <picture>
              {/* Mostra versão desktop em telas maiores */}
              <source media="(min-width: 885px)" srcSet={b.desktop} />
              {/* Mostra versão mobile por padrão */}
              <img src={b.mobile} alt={`Banner ${index + 1}`} />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerCarousel;
