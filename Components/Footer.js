import { BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const Footer = () => {
  return (
    <>
      <footer
        className="lg:text-left bg-gray-100 m-6 mt-16"
        style={{ marginTop: "18%" }}
      >
        <div className=" flex justify-center sm:justify-between p-7">
          @ 2022 E-com website:
          <div className="flex justify space-x-10">
            <a className=" text-pink-500 " href="http://www.instagram.com/">
              <BsInstagram size={22} />
            </a>
            <a className=" text-green-500" href="http://www.whatsapp.com/">
              <BsWhatsapp size={22} />
            </a>
            <a className="text-blue-500" href="http://www.twitter.com/">
              <BsTwitter size={25} />
            </a>
            <a className="text-white" href="http://goggle.com/">
              <FcGoogle size={25} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
