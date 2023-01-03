import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/actions/UserActions";
import { HiShoppingCart } from "react-icons/hi";
import AboutMenu from "./AboutMenu";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isCount, setisCount] = useState(0);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const count = useSelector((state) => state.AllCart.carts);

  useEffect(() => {
    if (count) {
      setisCount(count.length);
    }
  });

  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  const handleDispatch = (searchTerm) => {
    dispatch(setSearch(searchTerm));

    router.push("/SearchData");
  };

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  style={{ height: "56px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bbOYcvik--95jYJ_6dTIYTLmBssMxy9sdA3E_L6KF2nUX6lkEiUNbcRE41RND4uxThY&usqp=CAU"
                  alt=""
                />
              </a>
            </div>

            <div className="search ">
              <div className="mr-14">
                <input
                  style={{ position: "relative" }}
                  className="text-center w-[300px] h-7 border rounded-sm hover:bg-black/10"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => handleSearch(e)}
                />
                <button
                  className="text-base font-bold  text-gray-500 hover:text-gray-900 px-2 "
                  onClick={() => handleDispatch(value)}
                >
                  Search
                </button>
              </div>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="text-base font-bold text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/About">
                <a className="text-base font-bold text-gray-500 hover:text-gray-900">
                  About
                </a>
              </Link>

              <Link href="/ProItem">
                <a className="text-base font-bold text-gray-500 hover:text-gray-900">
                  Product
                </a>
              </Link>

              <Link href="/OrderItem">
                <a className="text-base font-bold text-gray-500 hover:text-gray-900">
                  Order
                </a>
              </Link>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/Addcart">
                <a className=" flex text-2xl whitespace-nowrap  text-gray-500 hover:text-gray-900">
                  <p className="flex mt-2 mr-12">
                    <HiShoppingCart /> {isCount}
                  </p>
                </a>
              </Link>
            </div>

            <div>
              <AboutMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
