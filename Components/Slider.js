import { SliderApi } from "./Api/SliderApi";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../styles/Slider.module.css";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
        className={`${style.swiper}`}
      >
        {SliderApi.map((img) => {
          return (
            <>
              <SwiperSlide className={`${style.slide}`}>
                <div className=" rounded overflow-hidden m-2 drop-shadow-2xl">
                  <div>
                    <img
                      src={img.image}
                      style={{ height: "450px", width: "1200px" }}
                    />
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
export default Slider;
