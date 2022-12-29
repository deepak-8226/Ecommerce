import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, idx) => {
    let number = idx + 0.5;
    return (
      <span key={idx}>
        {stars > idx + 1 ? (
          <FaStar className="icon" />
        ) : stars > number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <ul>
        <li className="icon-style flex text-yellow-500">{ratingStar}</li>
      </ul>
    </>
  );
};
export default Star;
