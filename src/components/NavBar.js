"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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
      name: "राज्य से खबर",

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
      path: "/author's",
      name: "लेखक की कलम से",
      
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
  const slideRight = () => {
    console.log("first")
   
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
};
  let pathname = usePathname() || "/";

  if (pathname.includes("/technology/")) {
    pathname = "/technology";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <nav
      className={`mx-auto p-4 rounded-xl container shadow-md overflow-x-scroll flex flexWrap flex-col md:flex-row items-center ${
        isScrolled ? 'sticky top-0 z-30 w-full p-0 m-0 bg-blue-600 sm:px-4 shadow' : 'bg-orange-400' 
      } py-4`}
    >
      <div className="text-gray-600 body-font">
      <nav className="md:ml-auto flex flexWrap items-center text-base justify-center">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;
          
          return (
            <Link
              key={item.path}
              className={`px-[1.92rem] py-0 rounded-md font-bold font-color-white text-lg relative no-underline duration-300 ease-in
               ${
                isActive ? "text-zinc-900" : "text-zinc-100"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              
              {item.path === hoveredPath && (
                
                <motion.div
                  className="absolute  bottom-0 left-0 h-full rounded-md -z-10"
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


