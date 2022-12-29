import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CateMap from "../Components/CateMap";
import { setCategory, setAllProducts } from "../redux/actions/UserActions";
import ProductCard from "./ProductCard";

const ProItem = () => {
  const [val, setVal] = useState(true);
  const dispatch = useDispatch();

  const AllProd = useSelector((state) => state.TotalProduct.allproo);
  const Product = useSelector((state) => state.AllProduct.products);

  useEffect(() => {
    dispatch(setCategory());
    dispatch(setAllProducts());
  }, []);

  return (
    <>
      <div onClick={() => setVal(false)}>
        <CateMap />
      </div>
      {val ? (
        <div className="grid mt-6  grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 justify-center">
          {AllProd?.length &&
            AllProd.map((item) => {
              return (
                <>
                  <ProductCard val={item} />
                </>
              );
            })}
        </div>
      ) : (
        <div className="grid mt-6  grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 justify-center">
          {Product?.length &&
            Product.map((val) => {
              return (
                <>
                  <ProductCard val={val} key={val.id} />
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ProItem;
