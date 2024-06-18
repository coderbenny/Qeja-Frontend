import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwipeCard() {
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
    <div className="swiper h-[150px] shadow-md top-0 md:h-[420px] w-full">
      <div className="swiper-wrapper">
        <div className="swiper-slide relative">
          <img
            src="/counting-money.jpg"
            alt="ladies meeting"
            className="object-fit"
          />
          <h1 className="bg-white md:p-1 font-bold text-3xl text-gray-500 absolute bottom-4 left-0 right-0 text-center">
            Chamas & Societies
          </h1>
        </div>

        <div className="swiper-slide relative">
          <img
            src="/black-meeting.jpg"
            alt="ladies meeting"
            className="object-fit"
          />
          <h1 className="bg-white md:p-1 font-bold text-3xl text-gray-500 absolute bottom-4 left-0 right-0 text-center">
            Loans
          </h1>
        </div>

        <div className="swiper-slide relative">
          <img
            src="/lady-selfie.jpg"
            alt="ladies meeting"
            className="object-fit"
          />
          <h1 className="bg-white md:p-1 font-bold text-3xl text-gray-500 absolute bottom-4 left-0 right-0 text-center">
            Financial Freedom
          </h1>
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
