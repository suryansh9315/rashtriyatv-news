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
      className={`mx-auto rounded-xl container shadow-md flex flex-col md:flex-row ${
        isScrolled
          ? "sticky top-0 z-30 w-full p-0 m-0 bg-blue-600 sm:px-2 shadow pt-2 pr-2"
          : "bg-orange-400"
      } `}
    >
      <div className="text-gray-600 body-font pt-2 pr-2">
        {showDropdown ? (
          // Render the dropdown menu when showDropdown is true
          <div className="md:hidden" onClick={closeDropdown}>
            <div className="container flex flex-col items-end text-white" onClick={toggleDropdown}>
              <RxCross2 className="text-2xl cursor-pointer" />
            </div>
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                className={`block px-[1.92rem] py-3 hover:text-zinc-700 -md  text-white text-lg no-underline duration-300 ease-in ${
                  item.path === pathname ? "text-zinc-900" : "text-zinc-100"
                } ${teko.className}`}
                href={item.path}
              >
                <div className="">{item.name}</div>
              </Link>
            ))}
          </div>
        ) : (
          // Render the mobile menu icon when showDropdown is false
          <div className="md:hidden container flex flex-col items-end text-white" onClick={toggleDropdown}>
            <MdMenu className="text-2xl cursor-pointer" />
          </div>
        )}

      </div>
      
        <nav className="md:mx-auto sm-hidden md overflow-hidden flex flexWrap items-center text-base justify-center">
          {/* Rest of your code */}
          {navItems.map((item, index) => (
              <Link
                key={item.path}
                className={`block px-[1.92rem] py-1 rounded-md text-white text-sm no-underline duration-300 ease-in ${
                  item.path === pathname ? 'text-zinc-900' : 'text-zinc-100'
                } ${teko.className}`}
                href={item.path}
              >
                <div className=''>{item.name}</div>
              </Link>
            ))}
        </nav>
    </nav>
  );
}
