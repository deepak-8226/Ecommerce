import { Autoplay, Pagination } from "swiper";
import style from "../styles/Home.module.css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeDesignApi } from "./Api/HomeDesignApi";

const HomeCateSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={8}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`${style.mySwiper}`}
      >
        {HomeDesignApi.map((HomCate) => {
          return (
            <>
              <SwiperSlide className={`${style.mySwiperSlide}`}>
                <div className="inline-flex mt-2 justify-center hover:bg-black/5">
                  <div className="text-center">
                    <img
                      className="mx-7 p-2 rounded-2xl"
                      style={{
                        position: "relative",
                        height: "70px",
                        width: "80px",
                      }}
                      src={HomCate.image}
                    />
                    <span className="text-sm font-semibold">
                      {HomCate.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};
export default HomeCateSlider;
