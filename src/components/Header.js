import Link from "next/link";
import React from "react";
import { Bakbak_One } from "next/font/google";

const bakbak = Bakbak_One({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white-200 p-2">
            <div className="mx-auto container flex flex-col md:flex-row items-center justify-center">
              <img src="/logo1.jpg" alt="" height={80} width={100} />
              <div className={bakbak.className}>
                <Link href="/" className="flex link link-underline link-underline-black title-font font-medium items-center textWh mb-2 md:mb-0 ml-4 text-2xl md:text-4xl text-black">
                  RASHTRIYA TV
                  <br />
                  राष्ट्रीय टीवी
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white-200 p-2">
            <div className="flex items-center justify-end pr-2">
              <form>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-24 text-base text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="खोज..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-r-lg border border-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
