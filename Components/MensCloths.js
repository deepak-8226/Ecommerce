import { MenClothsApi } from "./Api/MenClothsApi";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../styles/Home.module.css";
import "swiper/css/pagination";
import "swiper/css/bundle";

const MensCloths = () => {
  return (
    <>
      <Swiper
        slidesPerView={7}
        modules={[Pagination, Navigation]}
        navigation
        className={`${style.mySwiper}`}
      >
        <div className=" h-[200px] w-[90%] flex drop-shadow-2xl ">
          {MenClothsApi.map((men) => {
            return (
              <>
                <SwiperSlide className={`${style.mySwiperSlide}`}>
                  <div className=" flex p-4 ">
                    <img
                      className="w-full h-[200px] object-cover rounded-sm"
                      src={men.image}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};
export default MensCloths;
