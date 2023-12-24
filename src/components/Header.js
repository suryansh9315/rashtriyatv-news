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
    <header>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6">
          <div className=" flex md:justify-between md:items-center items-center justify-center">
            <div className="flex md:items-start md:justify-start items-center justify-center">
              <img
                className="md:mr-4 mr-4 object-fill"
                src="/logo1.jpg"
                alt=""
                width={100}
              />
              <div className={bakbak.className}>
                <Link
                  href="/"
                  className="flex link link-underline link-underline-black title-font font-medium items-center textWh mb-2 md:mb-0 text-xl md:text-3xl text-black md:text-left"
                >
                  RASHTRIYA TV
                  <br />
                  राष्ट्रीय टीवी
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 md:p-10">
          <div className="flex justify-end items-center">
            <div className="flex md:place-items-end md:justify-end">
              <form>
                <div className="relative w-full md:w-auto md:items-center">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full md:w-auto z-24 text-base text-white bg-zinc-200 border rounded-lg border-l-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="खोज..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-r-lg border border-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4 hover:animate-ping"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="flex items-center justify-center gap-10">
        <Search />
        <div className="flex items-center gap-6">
          <FaFacebookF className="text-blue-600 h-5 w-5 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
          <RiInstagramFill className="text-pink-500 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
          <FaYoutube className="text-red-600 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
          <FaTwitter className="text-blue-400 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out" />
        </div>
      </div> */
}
