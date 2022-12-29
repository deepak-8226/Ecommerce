import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { OrderItems, RemoveCart } from "../../redux/actions/UserActions";

const RezorPay = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const value = useSelector((state) => state.AllCart.carts);

  const item = value.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handlePay = (amt) => {
    const amount = amt *100; // Razorpay consider the amount in paise
    const options = {
      key: "rzp_test_02vLsEiaSZpVrE",
      amount: amount, // 2000 paise = INR 20, amount in paisa
      name: "",
      description: "",
      order_id: "",
      handler: function (response) {
        dispatch(RemoveCart());
        dispatch(OrderItems(value));
        console.log(response);
        router.push("/OrderItem");
      },
      prefill: {
        name: "Deepak dangi",
        email: "deepak@gmail.com",
        contact: "7568076920",
      },
      notes: {
        address: "Hello World",
      },
      theme: {
        color: "#528ff0",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <div
        className=" w-[500px] rounded-md mt-2 cursor-pointer font-semibold bg-green-600 py-3 text-sm text-black border text-center"
        onClick={() => handlePay(item)}
      >
        PayNow
      </div>
    </>
  );
};
export default RezorPay;
3;
