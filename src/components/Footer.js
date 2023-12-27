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
    title: "राज्य",
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
    title: "अध्यात्म",
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

  const redirectToInstagram = () => {
    // Replace 'https://www.instagram.com/' with the actual Instagram profile URL
    window.location.href = 'https://www.instagram.com/rashtriyatv2021/';
  };

  const redirectTofacebook = () => {
    // Replace 'https://www.instagram.com/' with the actual Instagram profile URL
    window.location.href = 'https://www.facebook.com/RashtriyaTv?mibextid=ZbWKwL';
  };
  const redirectTotweeter = () => {
    // Replace 'https://www.instagram.com/' with the actual Instagram profile URL
    window.location.href = 'https://twitter.com/i/flow/login?redirect_after_login=%2Frashtriyatv';
  };
  const redirectToyoutube = () => {
    // Replace 'https://www.instagram.com/' with the actual Instagram profile URL
    window.location.href = 'https://www.youtube.com/@rashtriyatv5956';
  };

  return (
    <div className="bg-[#fff] shadow rounded-xl p-10 flex justify-center gap-14 lg:gap-28 flex-wrap">
      <div className="w-[300px] flex flex-col gap-5">
        <img src="/logo1.jpg" className="w-40 object-contain" />
        <div className="text-black">
          
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
        <a href="https://www.facebook.com/RashtriyaTv?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
      <div
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110"
        onClick={redirectTofacebook}
      >
<FaFacebookF className="text-blue-600 h-5 w-5"/>   
   </div>
    </a>
    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Frashtriyatv" target="_blank" rel="noopener noreferrer">
      <div
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110"
        onClick={redirectTotweeter}
      >
<FaTwitter className="text-blue-600 h-5 w-5" />   </div>
    </a>
          <a href="https://www.instagram.com/rashtriyatv2021/" target="_blank" rel="noopener noreferrer">
      <div
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110"
        onClick={redirectToInstagram}
      >
        <RiInstagramFill className="text-blue-600 h-5 w-5" />
      </div>
    </a>
    <a href="https://www.youtube.com/@rashtriyatv5956" target="_blank" rel="noopener noreferrer">
      <div
        className="border-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110"
        onClick={redirectToyoutube}
      >
<FaYoutube className="text-blue-600 h-5 w-5" />      </div>
    </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
