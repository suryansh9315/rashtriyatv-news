"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Akshar } from "next/font/google";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const teko = Akshar({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const navItems = [
  {
    path: "/",
    name: "होम",
  },
  {
    path: "/news/national",
    name: "राष्ट्रीय समाचार",
  },
  {
    path: "/news/state",
    name: "राज्य",
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
    name: "अध्यात्म",
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
        className={`flex flex-col md:flex-row py-2 ${
          isScrolled
            ? "fixed top-0 bg-blue-600 w-screen z-50"
            : "border-t-2 border-b-2 bg-[#fff]"
        }`}
      >
        <div className="text-gray-600 body-font ">
          {showDropdown ? (
            <div
              className="md:hidden flex flex-col items-center justify-center"
              onClick={closeDropdown}
            >
              <div
                className={`container flex flex-col items-end ${
                  isScrolled ? "text-white" : "text-black"
                }`}
                onClick={toggleDropdown}
              >
                <RxCross2 className="text-2xl cursor-pointer space-x-2 mx-2" />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  className={`block px-[1.92rem] ${
                    isScrolled
                      ? item.path === pathname
                        ? "text-orange-400"
                        : "text-white"
                      : item.path === pathname
                      ? "text-orange-400"
                      : "text-black"
                  } ${teko.className}`}
                  href={item.path}
                >
                  <div
                    className={`duration-300 ease-in-out text-lg ${
                      isScrolled ? "hover:text-gray-400" : "hover:text-blue-500"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div
              className={`md:hidden container flex flex-col items-end ${isScrolled ? "text-white" : "text-black"}`}
              onClick={toggleDropdown}
            >
              <MdMenu className="text-3xl cursor-pointer pr-2" />
            </div>
          )}
          <nav className="w-screen h-7 hidden md:flex  text-base justify-evenly duration-300 ease-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                className={`${teko.className}`}
                href={item.path}
              >
                <div
                  className={`${
                    isScrolled ? "hover:text-gray-400" : "hover:text-blue-500"
                  } ${
                    isScrolled
                      ? item.path === pathname
                        ? "text-orange-400"
                        : "text-white"
                      : item.path === pathname
                      ? "text-orange-400"
                      : "text-black"
                  } duration-300 ease-in-out hover:scale-90 text-sm lg:text-lg`}
                >
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
