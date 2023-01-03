import {
  setAddCart,
  setAddWish,
  setDetails,
  setAllCategory,
  setWishDelete,
  singleBuyProduct,
} from "../redux/actions/UserActions";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Star from "../Components/Star";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = (props) => {
  const shareUrl = "http://pakkamarwadi.tk/";
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.AllCart.carts);
  const Wish = useSelector((state) => state.AllWishData.wish);
  const [hide, setHide] = useState(false);
  const [wish, setWish] = useState(false);

  const Token = JSON.parse(localStorage?.getItem("user"));
  const router = useRouter();

  useEffect(() => {
    if (Token !== "" && Token !== null && Token !== undefined) {
      router.push("/ProItem");
    } else {
      router.push("/auth/Login");
    }
  }, []);

  const handleAddCart = (val) => {
    const data = CartData.filter((elem) => {
      return elem.id === val.id;
    });

    if (data.length > 0) {
      toast.warn("already exists");
    } else {
      val.qty = 1;
      dispatch(setAddCart(val));
      toast.success("Add product in cart");
    }
  };
  // const handlerRemove = (dlt) => {
  //   dispatch(setDelete(dlt));
  // };

  const res = CartData.filter((elem) => {
    return elem.id === props.val.id;
  });

  useEffect(() => {
    if (res.length > 0) {
      setHide(false);
    } else {
      setHide(true);
    }
    if (result.length > 0) {
      setWish(false);
    } else {
      setWish(true);
    }
  });
  const result = Wish.filter((elem) => {
    return elem.id === props.val.id;
  });

  const handleDetail = (id, category) => {
    dispatch(setDetails(id));
    dispatch(setAllCategory(category));
  };

  const handleWish = (wish) => {
    const Data = Wish.filter((elem) => {
      return elem.id === wish.id;
    });
    if (Data.length > 0) {
      alert("already exists");
    } else {
      dispatch(setAddWish(wish));
    }
  };
  const removeWish = (provide) => {
    setWishDelete(provide);
  };

  // const singleBuy = (i) => {
  //   props.val.qty = 1;
  //   dispatch(singleBuyProduct(i));
  // };

  return (
    <>
      <div className="grid grid-cols-4 m-4 border hover:bg-black/5">
        <div className="h-100 w-80 mx-auto my-2 rounded-md p-4 hover:drop-shadow-2xl">
          <Link href={`Product/${props.val.id}`}>
            <div onClick={() => handleDetail(props.val.id, props.val.category)}>
              <img
                src={props.val.thumbnail}
                alt=""
                srcSet=""
                className="w-64 h-48 mx-auto"
              />
            </div>
          </Link>
          <span className="rounded-lg flex py-1 px-1 my-2 w-[68px] align-middle   ml-3">
            <p className="ml-2 text-center ">
              <Star stars={props.val.rating} />
            </p>
          </span>
          <div className="heart ml-20">
            {wish ? (
              <button
                style={{
                  position: "relative",
                  bottom: "32px",
                  left: "160px",
                }}
                onClick={() => handleWish(props.val)}
              >
                <AiOutlineHeart size={20} />
              </button>
            ) : (
              <button
                style={{
                  position: "relative",
                  bottom: "32px",
                  left: "160px",
                }}
                onClick={() => removeWish(props.val.id)}
                className="text-red-500"
              >
                <AiFillHeart size={20} />
              </button>
            )}
          </div>
          <span
            className="flex"
            style={{ position: "relative", bottom: "25px", left: "16px" }}
          >
            <WhatsappShareButton title="Sharing content" url={shareUrl}>
              <WhatsappIcon size={30} round={true} />
            </WhatsappShareButton>
          </span>

          <h3 className="font-bold text-xl my-4 ml-3">{props.val.title}</h3>
          <p className="text-gray-500 ml-3">
            {props?.val?.description.slice(0, 50)}
          </p>
          <br />
          <div className="flex justify-between w-60">
            <p className=" text-lg  font-mono ml-3 ">
              Rs:
              <span className="font-bold text-red-600">{props.val.price}</span>
            </p>
            {hide ? (
              <button
                className="hover:bg-slate-200  text-blue-900 font-semibold rounded-md p-1"
                onClick={(e) => handleAddCart(props.val, e)}
              >
                Add Cart
              </button>
            ) : (
              <Link href="/Addcart">
                <button
                  className="hover:bg-slate-200  text-orange-600 font-semibold rounded-md p-1"
                  // onClick={(e) => handlerRemove(props.val.id, e)}
                >
                  Go Cart
                </button>
              </Link>
            )}
            {/* <Link href="/SingleBuy">
              <button
                className="my-1 font-semibold"
                onClick={() => singleBuy(props.val)}
              >
                Buy
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
