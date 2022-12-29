import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import ImageSelected from "../../Components/ImageSelect";
import Star from "../../Components/Star";

const ProDuct = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.AllDetail.details);
  const Category = useSelector(
    (state) => state.ProductCategory.productCategory
  );

  const Result = Category.filter((category) => category.id !== detail.id);

  return (
    <>
      <div className="grid mt-6 grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 justify-center shadow ">
        <Helmet>
          <title>{detail.title || detail.brand}</title>
          <meta name="description" content={detail.description} />
        </Helmet>

        <div className="mx-12 w-full">
          <ImageSelected />
        </div>

        <div className=" mx-auto my-2 rounded-md p-4 hover:drop-shadow-2xl ml-16">
          <span className="bg-green-600 flex py-1 px-1 my-2 w-16  text-white  rounded-lg ml-3">
            <span className="ml-3.5">{detail.discountPercentage}</span>
          </span>
          <h3 className="font-bold text-xl my-4 ml-3">{detail.title}</h3>
          <p className="text-gray-500 ml-3">
            {detail?.description?.slice(0, 50)}
          </p>
          <div className="flex justify-between w-60">
            <p className=" text-lg font-bold font-mono ml-3">
              Rs: <span className="text-2xl text-red-600">{detail.price}</span>
            </p>
            <span>
              <Star stars={detail.rating} />
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className=""
          style={{
            position: "absolute",
            left: "62%",
            bottom: "33%",
            height: "40%",
          }}
          src="https://w7.pngwing.com/pngs/397/527/png-transparent-new-product-development-graphy-advertising-coming-soon-miscellaneous-emblem-text.png"
        />
      </div>
      <h1 className="font-bold text-2xl mx-3 my-3 text-indigo-600">
        Similer Products{" "}
      </h1>
      <div className="m-10 flex ">
        {Result?.map((list) => {
          return (
            <>
              <div className="h-50 w-[258px] my-2 rounded-md p-4 shadow hover:drop-shadow-2xl m-4">
                <img className="w-40 h-30 mb-2" src={list.thumbnail} alt="" />
                <p className="font-bold mb-3">{list.title}</p>
                <span className="">{list.description}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default ProDuct;
