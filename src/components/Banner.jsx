import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../assets/ad1.png";
import banner2 from "../assets/ad2.png";
import banner3 from "../assets/ad3.png";
import banner4 from "../assets/ad4.png";
import banner5 from "../assets/ad5.png";
import banner6 from "../assets/ad6.png";
import banner7 from "../assets/ad7.png";

function BannerCarousel() {
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  ];

  return (
    <div className="banner-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={800} // velocidade da transição
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerCarousel;
