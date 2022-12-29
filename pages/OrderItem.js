import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Star from "../Components/Star";
import { OrderCancel } from "../redux/actions/UserActions";

const OrderItem = () => {
  const rder = useSelector((state) => state.Order.orders);
  const Address = useSelector((state) => state.Address.address);
  const dispatch = useDispatch();
  const Token = JSON.parse(localStorage?.getItem("user"));
  const router = useRouter();
  useEffect(() => {
    if (Token !== "" && Token !== null && Token !== undefined) {
      router.push("/OrderItem");
    } else {
      router.push("/auth/Login");
    }
  }, []);

  const cancelOrder = (id) => {
    dispatch(OrderCancel(id));
    toast.success("Cancelled your order");
  };

  return (
    <>
      <div className=" items-center mt-16 ml-16">
        <label className="font-semibold text-2xl">
          Deliver to this address:
        </label>
        <label className=" flex mt-10 font-semibold ">
          Name:<p className="font-bold">{Address.fullName}</p>
        </label>

        <label className="flex font-semibold ">
          Mobile:<p className="font-bold">{Address.phone}</p>
        </label>
        <label className=" flex font-semibold">
          Email:<p className="font-bold">{Address.email}</p>
        </label>
        <label className="flex font-semibold">
          Address:<p className="font-bold">{Address.address}</p>
        </label>
        <br />
      </div>
      <div className="grid grid-cols-3 w-[894px]">
        {rder.map((order) => {
          const Totalprice = order.price * order.qty;
          const Discount = (order.price / 100) * order.discountPercentage;

          return (
            <>
              <div className=" p-4 border w-58 m-4">
                <div className=" h-46 w-40">
                  <img className="rounded-md" src={order.thumbnail} alt="" />
                </div>
                <div className="font-semibold">{order.title}</div>

                <p className="flex font-semibold">
                  Rating:
                  <Star stars={order.rating} />
                </p>
                <p className="font-semibold flex">
                  price: <strike>{(Totalprice * 82.79).toFixed(2)}</strike>/-
                  <p className="ml-3">
                    {((Totalprice - Discount * order.qty) * 82.79).toFixed(2)}/-
                  </p>
                </p>

                <span className="text-red-600  font-semibold">
                  Qty:{order.qty}
                </span>
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="ml-4 text-red-600 font-bold"
                >
                  cancel
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div className="orderImg">
        <div className="">
          <img
            style={{
              position: "absolute ",
              left: "54%",
              bottom: "14%",
              height: "68%",
              width: "40%",
            }}
            src="https://www.getillustrations.com/packs/azure-illustrations/scenes/_1x/delivery%20_%20express,%20vespa,%20scooter,%20deliver,%20logistic,%20e-commerce,%20order,%20shipping_md.png"
          />
        </div>
      </div>
    </>
  );
};

export default OrderItem;
