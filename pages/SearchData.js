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
            className="w-[480px] h-[320px]"
            style={{ position: "relative", top: "100px", left: "36%" }}
            src={
              "https://cdn.dribbble.com/users/1242216/screenshots/9326781/media/6384fef8088782664310666d3b7d4bf2.png?compress=1&resize=400x300&vertical=top"
            }
          />
        </div>
      )}
    </>
  );
};

export default SearchData;
