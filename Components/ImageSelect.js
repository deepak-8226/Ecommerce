import { useState } from "react";
import { useSelector } from "react-redux";

const ImageSelected = () => {
  const imageSelect = useSelector((state) => state.AllDetail.details);

  const { thumbnail, images } = imageSelect;
  const [selectedImg, setSelectedImg] = useState(thumbnail);

  return (
    <>
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center mt-4 ml-8 ">
        <div className="md:w-96 w-80 md:h-72 h-64 overflow-hidden mx-auto">
          <img
            className="w-full h-full hover:scale-110 duration-500"
            src={selectedImg}
          />
        </div>
        <div className="flex justify-center" style={{marginLeft:"52%"}} >
          {images?.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                alt="image"
                srcSet=""
                className={`lg:h-[7rem] h-[5rem] lg:w-[8rem] w-[5rem] cursor-pointer   mx-2 my-4 ${
                  selectedImg === image ? "border-4 border-gray-600 " : ""
                }`}
                onClick={() => setSelectedImg(image)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ImageSelected;
