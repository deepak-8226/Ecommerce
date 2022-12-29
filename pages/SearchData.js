import { useSelector } from "react-redux";
import ProductCard from "../pages/ProductCard";

const SearchData = () => {
  const Search = useSelector((state) => state.SearchData.search.products);

  return (
   
   <>
      {Search.length > 0 ? (
        <div className="grid mt-6 grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 justify-center">
          {Search.map((srch) => {
            return (
              <>
                <ProductCard val={srch} />
              </>
            );
          })}
        </div>
      ) : (
        <div>
          <img
            className="w-[440px] h-[280px]"
            style={{ position: "relative", top: "100px", left: "36%" }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU"
            }
          />
        </div>
      )}
    </>
  );
};

export default SearchData;
