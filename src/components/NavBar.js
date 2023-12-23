"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Akshar } from "next/font/google";
import { MdMenu } from "react-icons/md"; //import menu icon
import { RxCross2 } from "react-icons/rx";

const teko = Akshar({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const navItems = [
  {
    path: "/",
    name: "घर",
  },
  {
    path: "/news/national",
    name: "राष्ट्रीय समाचार",
  },
  {
    path: "/news/state",
    name: "राज्य खबर",
  },
  {
    path: "/news/crime",
    name: "अपराध",
  },
  {
    path: "/news/politics",
    name: "राजनीति",
  },
  {
    path: "/news/sports",
    name: "खेल",
  },

  {
    path: "/news/business",
    name: "व्यापार",
  },
  {
    path: "/news/employment",
    name: "रोजगार",
  },

  {
    path: "/news/entertainment",
    name: "मनोरंजन",
  },

  {
    path: "/news/health",
    name: "हेल्थ",
  },
  {
    path: "/news/spiritual",
    name: "अध्यात्",
  },
  {
    path: "/news/media",
    name: "मीडिया",
  },
  {
    path: "/news/author",
    name: "लेखक की कलम से",
  },
  {
    path: "/news/viral",
    name: "खबर वायरल है",
  },
  {
    path: "/news/podcast",
    name: "पॉडकास्ट",
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const pathname = usePathname() || "/";

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <div
        className={`bg-[#fff] flex items-center content-evenly justify-evenly lg:items-center xl:items-center flex-col md:flex-row border-t-2 border-b-2 py-3 ${
          isScrolled
            ? "sticky top-0 w-screen items-center justify-evenly z-50"
            : ""
        }`}
      >
        <div className="text-gray-600 body-font ">
          {showDropdown ? (
            // Render the dropdown menu when showDropdown is true
            <div className="md:hidden" onClick={closeDropdown}>
              <div
                className="container flex flex-col items-end text-white"
                onClick={toggleDropdown}
              >
                <RxCross2 className="text-2xl text-black cursor-pointer space-x-2" />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  className={`${
                    item.path === pathname ? "text-blue-500" : "text-black"
                  } ${teko.className}`}
                  href={item.path}
                >
                  <div className="hover:text-blue-500 duration-300 ease-in-out text-lg">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            // Render the mobile menu icon when showDropdown is false
            <div
              className="md:hidden container flex flex-col items-end text-white"
              onClick={toggleDropdown}
            >
              <MdMenu className="text-3xl text-black cursor-pointer pr-2" />
            </div>
          )}
          <nav className="md:px-2 lg:px-4 xl:px-2 w-screen h-7 hidden md:flex lg:flex xl:flex flexWrap md:items-start lg:items-start xl:items-start text-base md:justify-start lg:justify-center xl:justify-center xl:mb-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                className={`${
                  item.path === pathname ? "text-blue-500" : "text-black"
                } ${teko.className}`}
                href={item.path}
              >
                <div className="hover:text-blue-500 duration-300 ease-in-out text-lg">
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
