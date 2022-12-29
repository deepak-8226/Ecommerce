import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress, setRemoveAddress } from "../redux/actions/UserActions";
import RezorPay from "./payment/rezorPay";

const Address = () => {
  const dispatch = useDispatch();
  const [razor, setRezor] = useState(false);
  const Bio = useSelector((state) => state.Address.address);
  const [location, setLocation] = useState(true);

  const [value, setvalue] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const Onsubmit = (e) => {
    setRezor(true);

    e.preventDefault();
    dispatch(setAddress(value));

    if (location) {
      setLocation(false);
    } else {
      setLocation(true);
    }
  };

  const RmvAddress = () => {
    dispatch(setRemoveAddress());
    setLocation(true);
  };
  return (
    <>
      <div>
        <div className="">
          <img
            style={{ position: "absolute", left: "52%", top: "20%" }}
            className="w-[590px] h-[420px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vRcwMWsprd7LkjiMs0S5f_A0T12x55-CVw&usqp=CAU"
          />
        </div>
        {location ? (
          <div className="p-1 mt-16 ml-16">
            <div className=" ml-2 ">
              <input
                className="w-[500px] h-[34px] bg-gray-300 mt-1 text-black rounded-lg text-center "
                type="text"
                name="fullName"
                value={value.fullName}
                placeholder="FullName"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="ml-2 ">
              <input
                className=" w-[500px] h-[34px] bg-gray-300 mt-1 text-black rounded-lg text-center"
                type="phone"
                name="phone"
                value={value.phone}
                placeholder="Phone"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="ml-2">
              <input
                className="w-[500px] h-[34px] bg-gray-300 mt-1 text-black rounded-lg text-center"
                type="email"
                name="email"
                value={value.email}
                placeholder="Email"
                onChange={(e) => handleInputChange(e)}
              /> 
            </div>
            <div className="ml-2">
              <input
                className="w-[500px] h-[34px] bg-gray-300 mt-1 text-black rounded-lg text-center"
                type="address"
                name="address"
                value={value.address}
                placeholder="Address"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <button
              className="w-[150px] items-center bg-gray-500 ml-2 mt-2 px-0.5 rounded text-white"
              type="button"
              onClick={(e) => Onsubmit(e)}
            >
              Done
            </button>
          </div>
        ) : (
          <div className=" items-center mt-16 ml-16">
            <label className="font-semibold text-2xl">
              Deliver to this address:
            </label>
            <label className=" flex mt-10 font-semibold ">
              Name:<p className="font-bold">{Bio.fullName}</p>
            </label>

            <label className="flex font-semibold ">
              Mobile:<p className="font-bold">{Bio.phone}</p>
            </label>
            <label className=" flex font-semibold">
              Email:<p className="font-bold">{Bio.email}</p>
            </label>
            <label className="flex font-semibold">
              Address:<p className="font-bold">{Bio.address}</p>
            </label>
            <br />
            <button
              className="rounded-md bg-red-500 mt-4 px-1 py-1 text-white "
              onClick={() => RmvAddress()}
            >
              remove
            </button>
            {razor ? <RezorPay /> : ""}
          </div>
        )}
      </div>
      {/* <div className="">
            <img
              style={{ position: "relative", left: "44%", top: "50%" }}
              className="w-[700px] h-[450px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vRcwMWsprd7LkjiMs0S5f_A0T12x55-CVw&usqp=CAU"
            />
          </div> */}
    </>
  );
};
export default Address;
