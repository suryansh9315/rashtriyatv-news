"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Akshar } from 'next/font/google';
import { MdMenu } from 'react-icons/md'; // Import the menu icon

const teko = Akshar({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
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
  path: "/author's",
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <nav className={`mx-auto p-4 rounded-xl container shadow-md flex flex-col md:flex-row ${isScrolled ? 'sticky top-0 z-30 w-full p-0 m-0 bg-blue-600 sm:px-4 shadow' : 'bg-orange-400'} py-4`}>
      <div className="text-gray-600 body-font">
        {showDropdown ? (
          // Render the dropdown menu when showDropdown is true
          <div className="md:hidden" onClick={closeDropdown}>
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                className={`block px-[1.92rem] py-3 rounded-md font-bold font-color-white text-lg no-underline duration-300 ease-in ${
                  item.path === pathname ? 'text-zinc-900' : 'text-zinc-100'
                } ${teko.className}`}
                href={item.path}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        ) : (
          // Render the mobile menu icon when showDropdown is false
          <div className="md:hidden" onClick={toggleDropdown}>
            <MdMenu className="text-2xl cursor-pointer" />
          </div>
        )}

        <nav className="md:m-auto flex flexWrap items-center text-base justify-center">
          {/* Rest of your code */}
          {/* {navItems.map((item, index) => (
              <Link
                key={item.path}
                className={`block px-[1.92rem] py-3 rounded-md font-bold font-color-white text-lg no-underline duration-300 ease-in ${
                  item.path === pathname ? 'text-zinc-900' : 'text-zinc-100'
                } ${teko.className}`}
                href={item.path}
              >
                <div className='sm:hidden'>{item.name}</div>
              </Link>
            ))} */}
        </nav>
      </div>
    </nav>
  );
}
