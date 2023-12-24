"use client";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "घर",
    link: "/",
  },
  {
    title: "राष्ट्रीय समाचार",
    link: "/news/national",
  },
  {
    title: "राज्य खबर",
    link: "/news/state",
  },
  {
    title: "अपराध",
    link: "/news/crime",
  },
  {
    title: "राजनीति",
    link: "/news/politics",
  },
  {
    title: "खेल",
    link: "/news/sports",
  },
  {
    title: "व्यापार",
    link: "/news/business",
  },

  {
    title: "रोजगार",
    link: "/news/employment",
  },
  {
    title: "मनोरंजन",
    link: "/news/entertainment",
  },
  {
    title: "हेल्थ",
    link: "/news/health",
  },

  {
    title: "अध्यात्",
    link: "/news/spiritual",
  },
  {
    title: "मीडिया",
    link: "/news/media",
  },

  {
    title: "लेखक की कलम से",
    link: "/news/author",
  },
  {
    title: "खबर वायरल है",
    link: "/news/viral",
  },
  {
    title: "पॉडकास्ट",
    link: "/news/podcast",
  },
];

const Footer = () => {
  const pathname = usePathname() || "/";

  return (
    <div className="bg-[#fff] shadow rounded-xl p-10 flex justify-center gap-14 lg:gap-28 flex-wrap">
      <div className="w-[300px] flex flex-col gap-5">
        <img src="/logo1.jpg" className="w-40 object-contain" />
        <div className="text-black">
          Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem
          totam rem aperiam.
        </div>
        <div className="flex items-center gap-3">
          <TbPhoneCall className="text-blue-600 h-8 w-8" />
          <div className="text-black">+012 (345) 678 99</div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-xl text-black">News</div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            {navLinks.slice(0, 8).map((link) => (
              <Link
                href={link.link}
                className={`cursor-pointer hover:text-blue-600 transition-all duration-150 ease-in ${
                  pathname === link.link ? "text-blue-600" : "text-black"
                }`}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.slice(8).map((link) => (
              <Link
                href={link.link}
                className={`cursor-pointer hover:text-blue-600 transition-all duration-150 ease-in ${
                  pathname === link.link ? "text-blue-600" : "text-black"
                }`}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[300px] flex flex-col gap-5">
        <div className="font-semibold text-xl text-black">Follow Us On</div>
        <div className="flex items-center gap-5">
          <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
            <FaFacebookF className="text-blue-600 h-5 w-5" />
          </div>
          <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
            <FaTwitter className="text-blue-600 h-5 w-5" />
          </div>
          <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
            <RiInstagramFill className="text-blue-600 h-5 w-5" />
          </div>
          <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
            <FaYoutube className="text-blue-600 h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
