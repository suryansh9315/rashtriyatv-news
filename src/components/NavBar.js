"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Akshar } from "next/font/google";
import { MdMenu } from "react-icons/md"; //import menu icon
import { RxCross2 } from "react-icons/rx";

const teko = Akshar({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

const navItems = [
  {
    path: "/",
    name: "घर",
  },
  {
    path: "/national",
    name: "राष्ट्रीय समाचार",
  },
  {
    path: "/newsstate",
    name: "राज्य खबर",
  },
  {
    path: "/crime",
    name: "अपराध",
  },
  {
    path: "/politics",
    name: "राजनीति",
  },
  {
    path: "/sports",
    name: "खेल",
  },

  {
    path: "/business",
    name: "व्यापार",
  },
  {
    path: "/employment",
    name: "रोजगार",
  },

  {
    path: "/Entertainment",
    name: "मनोरंजन",
  },

  {
    path: "/Health",
    name: "हेल्थ",
  },
  {
    path: "/spiritual",
    name: "अध्यात्",
  },
  {
    path: "/media",
    name: "मीडिया",
  },
  {
    path: "/authors",
    name: "लेखक की कलम से",
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // New state for dropdown visibility

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

  const slideRight = () => { 
    console.log("first")

    if (sliderRef.current){
      sliderRef.current.scrollLeft += 500;
    }
  };


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  let pathname = usePathname() || "/";

  if (pathname.includes("/technology/")) {
    pathname = "/technology";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  // Rest of your code here

  return (
    <nav
      className={`mx-auto rounded-xl container lg:w-screen xl:w-screen lg:items-center xl:items-center lg:justify-center xl:justify-center shadow-md flex flex-col md:flex-row pb-2 pt-2 pr-2 ${
        isScrolled
          ? "sticky top-0 z-30 w-full p-0 m-0 bg-blue-600 sm:px-2 shadow pt-2 pr-2 pb-2"
          : "bg-orange-400"
      } `}
    >
      <div className="text-gray-600 body-font ">
        {showDropdown ? (
          // Render the dropdown menu when showDropdown is true
          <div className="md:hidden" onClick={closeDropdown}>
            <div
              className="container flex flex-col items-end text-white"
              onClick={toggleDropdown}
            >
              <RxCross2 className="text-2xl cursor-pointer space-x-2" />
            </div>
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                className={`block px-[1.92rem] py-2 text-white text-lg no-underline duration-300 ease-in ${
                  item.path === pathname ? "text-zinc-900" : "text-zinc-100"
                } ${teko.className}`}
                href={item.path}
              >
                <div className="hover:text-zinc-700"> {item.name} </div>
              </Link>
            ))}
          </div>
        ) : (
          // Render the mobile menu icon when showDropdown is false
          <div
            className="md:hidden container flex flex-col items-end text-white"
            onClick={toggleDropdown}
          >
            <MdMenu className="text-3xl cursor-pointer pr-2" />
          </div>
        )}
        <nav className="md:px-2 lg:px-4 xl:px-2 w-screen h-7 hidden md:flex lg:flex xl:flex flexWrap md:items-start lg:items-start xl:items-start text-base md:justify-start lg:justify-center xl:justify-center xl:mb-2">
          {/* Rest of your code*/}
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              className={`px-2 lg:px-4 py-1 min-w-max lg:text-[0.88rem] xl:text-lg h-7 flex rounded-md text-white text-sm no-underline  ${
                item.path === pathname ? "text-zinc-900" : "text-zinc-100"
              } ${teko.className}`}
              href={item.path}
            >
              <div className="hover:text-zinc-700 duration-300 ease-in"> {item.name} </div>
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
