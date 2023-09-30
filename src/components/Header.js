import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 bg-white-200 p-4">
            <div className=" mx-auto container flex flexWrap p-5 flex-col md:flex-row items-center">
              <img src="/logo1.jpg" alt="" height={80} width={100} />
              <Link
                href="/"
                className="flex title-font font-medium items-center textWh mb-4 md:mb-0 ml-3 text-xl"
              >
                RASHTRIYA TV    ||    राष्ट्रीय टीबी
              </Link>
            </div>
          </div>

          <div className="col-span-1 bg-white-200 p-4 flex items-center justify-end">
            <form>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
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
    </header>
  );
};

export default Header;
