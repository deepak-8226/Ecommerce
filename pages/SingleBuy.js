import { useSelector } from "react-redux";
import { MdAttachMoney } from "react-icons/md";

const SingleBuy = () => {
  const SingleProduct = useSelector(
    (state) => state.BuysingleProduct.singlebuyproduct
  );
  return (
    <>
      <div className="h-74 w-[560px] m-12 border">
        <div className="flex">
          <img className="h-40 w-100 m-2" src={SingleProduct.thumbnail} />
          <div className="m-14">
            <p className="font-bold">Title:{SingleProduct.title}</p>
            <p>{SingleProduct.description}</p>

            <p className="mt-8 flex font-bold text-red-600">
              <MdAttachMoney size={20} /> {SingleProduct.price}
            </p>
          </div>
        </div>
        <button className="bg-green-500 font-semibold p-1 rounded-md ">
          Confirm Buy
        </button>
      </div>
    </>
  );
};
export default SingleBuy;
