import Link from "next/link";
import { Bakbak_One } from "next/font/google";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Search from "./Search";

const bakbak = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <header className="">
      <div className="bg-[#fff] flex justify-between items-center py-10 px-16">
        <div className="flex items-center justify-center">
          <img
            className="md:mr-4 object-fill"
            src="/logo1.jpg"
            alt=""
            width={100}
          />
          <div className={bakbak.className}>
            <Link
              href="/"
              className="flex text-center link link-underline link-underline-black title-font font-medium items-center textWh mb-2 md:mb-0 text-xl md:text-3xl text-black md:text-left"
            >
              RASHTRIYA TV
              <br />
              राष्ट्रीय टीवी
            </Link>
          </div>
        </div>
        {/* <div className="flex items-center justify-center gap-10">
          <Search />
          <div className="flex items-center gap-6">
            <FaFacebookF className="text-blue-600 h-5 w-5 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
            <RiInstagramFill className="text-pink-500 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
            <FaYoutube className="text-red-600 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
            <FaTwitter className="text-blue-400 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
