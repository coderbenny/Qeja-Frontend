import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwipeCard({ img1, img2, img3 }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      direction: "horizontal",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    // Cleanup: Destroy Swiper instance when component is unmounted
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="swiper h-[200px] shadow-md top-0 md:h-[420px] w-full">
      <div className="swiper-wrapper">
        <div className="swiper-slide relative">
          <img src={img1} alt="house1" className="object-fit" />
        </div>
        <div className="swiper-slide relative">
          <img src={img2} alt="house2" className="object-fit" />
        </div>
        <div className="swiper-slide relative">
          <img src={img3} alt="house3" className="object-fit" />
        </div>
      </div>

      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
}

export default SwipeCard;
