import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import { setDec, setDelete, setInc } from "../redux/actions/UserActions";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

const Addcart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState();
  const data = useSelector((state) => state.AllCart.carts);

  const Token = JSON.parse(localStorage?.getItem("user"));

  useEffect(() => {
    if (Token !== "" && Token !== null && Token !== undefined) {
      router.push("/Addcart");
    } else {
      router.push("/auth/Login");
    }
  }, []);

  useEffect(() => {
    if (data) {
      setCount(data.length);
    }
    const Disabled = data.length > 0;
    setDisabled(Disabled);
  }, []);

  const handlerDelete = (item) => {
    dispatch(setDelete(item));
  };

  const totalAmt = data.reduce((accu, curr) => {
    return accu + curr.price * curr.qty;
  }, 0);

  const setDecrease = (id, qty) => {
    if (qty === 0 || qty > 1) {
      dispatch(setDec(id, qty - 1));
    }
  };

  const setIncrease = (id, stock, qty) => {
    if (qty < stock) {
      dispatch(setInc(id, qty + 1));
    }
  };

  const Address = () => {
    router.push("/Address");
  };

  return (
    <>
      <body className="bg-gray-100">
        <Helmet>
          <title>addtocart</title>
          <meta name="description" content="All products Add in a cart" />
        </Helmet>
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-extrabold text-2xl text-red-500">
                  Shopping Cart
                </h1>
                <h2 className="font-bold text-2xl">{count}Items</h2>
              </div>

              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {data?.length &&
                data?.map((item) => {
                  const TotalPrice = item.price * item.qty;
                  const Discount =
                    (item.price / 100) * item.discountPercentage * item.qty;
                  return (
                    <>
                      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                          <div className="w-20">
                            <img className="h-20" src={item.thumbnail} alt="" />
                          </div>
                          <div className="flex flex-col justify-between ml-4 flex-grow">
                            <span className="font-bold text-sm">
                              {item.title}
                            </span>
                            <span className="text-red-500 text-xs"></span>
                            <button
                              type="button"
                              onClick={() => handlerDelete(item.id)}
                              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-center w-1/5">
                          <div
                            className=" fill-current text-gray-600 mt-1"
                            onClick={() => setDecrease(item.id, item.qty)}
                          >
                            <FaMinus />
                          </div>
                          <input
                            className="mx-2 border text-center w-8"
                            value={item.qty}
                          />
                          <div
                            className=" fill-current text-gray-600 mt-1"
                            onClick={() =>
                              setIncrease(item.id, item.stock, item.qty)
                            }
                          >
                            <FaPlus  />
                          </div>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          <strike>{TotalPrice}</strike>(
                          {item.discountPercentage}%)
                        </span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          {(TotalPrice - Discount).toFixed(2)}
                        </span>
                      </div>
                    </>
                  );
                })}

              <Link href="/ProItem">
                <a
                  href="#"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </a>
              </Link>

              <div className="">
                <h2 className="text-end font-semibold text-2xl ">
                  Total Rs:{totalAmt}
                </h2>
              </div>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {count}
                </span>
                <span className="font-semibold text-sm">${totalAmt}</span>
              </div>

              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${totalAmt}</span>
                </div>

                {disabled ? (
                  <button
                    onClick={() => Address()}
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  >
                    Checkout
                  </button>
                ) : (
                  <button
                    disabled
                    className="font-semibold  py-3 text-sm text-black border uppercase w-full"
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Addcart;
