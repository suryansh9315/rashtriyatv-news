import React from "react";
import { Akshar } from "next/font/google";
import Image from "next/image";

const akshar = Akshar({
  subsets: ["latin"],
  weight: "300",
  display: "swap"
});

const Footer = () => {
  return (
    <div className="container mx-auto w-full mt-8 px-4">
      <footer className="text-gray-600 body-font bg-color-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white-200 p-4">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/logo1.jpg" alt="" height={100} width={150} />
                <div className={akshar.className}>
                  <span className="ml-3 text-2xl">
                    RASHTRIYA TV
                    <br />
                    <div className="text-sm text-gray-500">
                      ©2023 RASHTRIYA TV
                    </div>
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white-200">
            <div className="bg-white-500 p-4">
              <p className="text-blue-600 text-2xl font-bold">संपर्क करें</p>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <a href="#" className="links">
                    +91-9911872414
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="links">
                    tanish
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="links">
                    vashisth
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="links">
                    engineer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white-200">
            <div className="p-4">
              <h3 className="text-blue-600 text-2xl font-bold">Newsletter</h3>
              <p>Subscribe for latest updates</p>
              {/* Add your newsletter form here for mobile */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
