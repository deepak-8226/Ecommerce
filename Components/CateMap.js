import { useDispatch } from "react-redux";
import { SwiperSlide, Swiper } from "swiper/react";
import { cateImages } from "./Api/CateApi";
import { setProduct } from "../redux/actions/UserActions";
import style from "../styles/Home.module.css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

const CateMap = () => {
  const dispatch = useDispatch();
  const getCategoryData = (title) => {
    dispatch(setProduct(title));
  };

  return (
    <>
      <Swiper
        slidesPerView={10}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`${style.mySwiper}`}
      >
        {cateImages?.length &&
          cateImages !== undefined &&
          cateImages !== null &&
          cateImages.map((category) => {
            return (
              <SwiperSlide className={`${style.mySwiperSlide}`}>
                <div className="inline-flex mt-2 justify-center hover:bg-black/5">
                  <div onClick={() => getCategoryData(category.name)}>
                    <div className="text-center">
                      <img
                        className="mx-7 p-2 rounded-2xl"
                        style={{
                          position: "relative",
                          height: "70px",
                          width: "80px",
                        }}
                        src={category.img}
                      />
                      <span className="text-sm font-semibold">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
export default CateMap;
