import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Star from "../Components/Star";
import { setWishDelete } from "../redux/actions/UserActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const Wish = useSelector((state) => state.AllWishData.wish);

  const Delete = (id) => {
    dispatch(setWishDelete(id));
  };
  return (
    <>
      <div className="">
        <img
          style={{ left: "52%", top: "20%" }}
          className="absolute w-[600px] h-[520px]"
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/419ac77feec8e56951d9095c64654016~c5_720x720.jpeg?x-expires=1671030000&x-signature=7mvRREJWRphFcwh9R1kWyZaqM8c%3D"
        />
      </div>
      <div className="grid grid-cols-4 m-4">
        <Helmet>
          <title>wishlist</title>
          <meta name="description" content="your favriote products is here" />
        </Helmet>
        <div className="h-50 w-[700px] mx-auto my-4 grid grid-cols-2 ">
          {Wish.map((wisItem) => {
            return (
              <>
                <div className="rounded-md border-black/10 border mt-4 mx-4 hover:drop-shadow-2xl ">
                  <img
                    className="w-42 h-28"
                    src={wisItem.thumbnail}
                    alt={wisItem.title}
                  />
                  <div className="mt-2 mx-3">
                    <Star stars={wisItem.rating} />
                  </div>
                  <div className="flex mt-4">
                    <div className="font-semibold mx-4 flex">
                      Title:<p className="font-bold">{wisItem.title}</p>
                    </div>
                    <p className="font-bold mx-4 ">
                      Rs:
                      <span className="text-red-600">{wisItem.price}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-md text-red-600 font-bold mx-4 m-1 border-black/25 border p-1  hover:bg-black/20"
                    onClick={() => Delete(wisItem.id)}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Wishlist;
