import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDesignDetails } from "../redux/actions/UserActions";
import { HomeDesignApi } from "./Api/HomeDesignApi";
const HomeDesign = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const Detail = useSelector((state) => state.designDetails.designdetails);

  const Details = (item) => {
    dispatch(setHomeDesignDetails(item));
    if (Detail) {
      router.push(`Designdetails/${Detail.id}`);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {HomeDesignApi.map((item, index) => {
          return (
            <div
              onClick={() => Details(item)}
              key={index}
              className="border border-shadow-lg rounded-lg hover:bg-black/5 hover:drop-shadow-2xl"
            >
              <img
                src={item.image}
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className=" p-1 rounded-md ">{item.price}/-</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default HomeDesign;
