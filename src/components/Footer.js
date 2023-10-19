import React from "react";
import { Akshar } from "next/font/google";
import Image from "next/image";

const akshar = Akshar({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

const Footer = () => {
  return (
    <div className="container mx-auto w-full mt-8 px-4">
      <footer className="text-gray-600 body-font bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

          <div className="bg-yellow-200 px-4 mt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 md:justify-start justify-center">
                  <img src="/logo1.jpg" alt="" height={100} width={150} />
                  <div className={akshar.className}>
                    <div className="mt-2 sm:mt-0 ml-2 text-xl text-center sm:text-left">
                      RASHTRIYA TV
                      <br />
                      <div className="text-sm text-gray-500 mt-2 sm:mt-0 ml-1  text-center sm:text-left">
                        ©2023 RASHTRIYA TV
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-200 px-4 mt-1 pt-5">
            <div className={akshar.className}>
              <div className="text-blue-600 text-2xl">संपर्क करें</div>
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
            </ul>
            </div>
          </div>

          <div className="bg-red-200 px-4 mt-1 pt-5">
          <div className={akshar.className}>
              <div className="text-blue-600 text-2xl">समाचार पत्रिका</div>
              <div>नवीनतम अपड</div>
              <form
                action="https://formsubmit.co/vashisthtanish2069@gmail.com"
                method="POST"
                id="form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" Email Address"
                  id="data"
                  className="w-44 my-1 mr-2 border-2 border-orange-500 rounded-lg"
                />
                <button className="my-1 mb-2 rounded-xl bg-blue-600 py-1 px-2 text-white hover:bg-blue-8002">
                  सदस्यता
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
