"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/business",
      name: "BUSINESS",
    },
    {
      path: "/sports",
      name: "SPORTS",
    },
    {
      path: "/national",
      name: "NATIONAL",

    },
    {
      path: "/technology",
      name: "TECHNOLOGY",
    },
  ];



export default function NavBar () {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  let pathname = usePathname() || "/";

  if (pathname.includes("/technology/")) {
    pathname = "/technology";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <nav
      className={`mx-auto container shadow-md  flex flexWrap p-5 flex-col md:flex-row items-center ${
        isScrolled ? 'sticky top-0 z-30 w-full p-6 bg-black sm:px-4 shadow' : 'bg-blue-500'
      } py-4`}
    >
       <div className="text-gray-600 body-font">
      <nav className="md:ml-auto flex flexWrap items-center text-base justify-center">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          
          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full  rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
    </nav>
  );
};


