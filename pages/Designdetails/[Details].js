import { useSelector } from "react-redux";

const Details = () => {
  const printD = useSelector((state) => state.designDetails.designdetails);

  return (
    <>
      <div
        className="m-2 font-sans leading-normal flex"           
        style={{ position: "relative", left: "456px", top: "120px" }}         
      >
        <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex ">
          <div className=" h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
            <img src={printD.image} />
          </div>

          <div className="px-6 py-4">
            <h2 className="mb-2 font-black">{printD.name}</h2>
            <p className="mb-4 text-grey-dark ">{printD.description}</p>

            <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
              Hey, click me.
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
