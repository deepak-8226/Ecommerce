import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const AboutMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState();
  const Token = JSON.parse(localStorage?.getItem("user"));

  useEffect(() => {
    if (Token !== "" && Token !== null && Token !== undefined) {
      setLogin(Token);
      2;
    }
  }, []);

  const removeToken = () => {
    localStorage.removeItem("user");
    router.push("/auth/Login");
    setOpen(!open);
  };

  const close = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="max-w-[1840px] mx-auto flex justify-content items-center">
        <div className="flex items-center">
          <div
            className="  text-gray-500 hover:text-gray-900"
            onClick={() => setOpen(!open)}
          >
            <HiMenu size={22} />
          </div>
        </div>

        {open ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu  */}

        <div
          className={
            open
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10  duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setOpen(!open)}
            size={30}
            className="absolute  right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Admin <span className="font-bold">Profile</span>
          </h2>
          {!login ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgi7y9carOBpLe3wb6OuDstveQEB9grv_RQ&usqp=CAU"
              className="h-16 w-18"
              style={{ position: "relative", left: "35%" }}
            />
          ) : (
            <div>
              <img
                src={Token?.image}
                className="h-16 w-18"
                style={{ position: "relative", left: "35%" }}
              />
              <p className="text-gray-800 uppercase text-sm font-bold ml-4">
                {Token?.firstName}
              </p>
            </div>
          )}
          <nav>
            <ul className="col flex-col p-4 text-gray-800 ">
              {Token ? (
                <div>
                  <Link href="/OrderItem">
                    <li
                      className="text-xl py-4 flex cursor-pointer"
                      onClick={() => close()}
                    >
                      <TbTruckDelivery size={30} className="mr-4" />
                      Orders
                    </li>
                  </Link>
                  <Link href="/Wishlist">
                    <li
                      className="text-xl py-4 flex cursor-pointer"
                      onClick={() => close()}
                    >
                      <MdFavorite size={30} className="mr-4" />
                      Favorites
                    </li>
                  </Link>
                  <li
                    className="text-xl py-4 flex cursor-pointer"
                    onClick={() => removeToken()}
                  >
                    <BiLogOutCircle size={30} className="mr-4" />
                    LogOut
                  </li>
                </div>
              ) : (
                <Link href="/auth/Login">
                  <li
                    className="text-xl py-4 flex cursor-pointer"
                    onClick={() => close()}
                  >
                    <BiLogInCircle size={30} className="mr-4" />
                    LogIn
                  </li>
                </Link>
              )}
              <Link href="https://ecommerce.help">
                <li className="text-xl py-4 flex cursor-pointer">
                  <MdHelp size={30} className="mr-4" />
                  Help
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AboutMenu;
