"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Akshar } from "next/font/google";

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

  return (
    <div>
      <div
        className={`bg-[#fff] flex items-center justify-evenly border-t-2 border-b-2 py-3 ${
          isScrolled ? "fixed top-0 w-screen items-center justify-evenly z-50" : ""
        }`}
      >
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
    </div>
  );
}
