import React from "react";
import { Akshar } from "next/font/google";
import Image from "next/image";

const akshar = Akshar({
  subsets: ["latin"],
  weight: "300",
});

const Footer = () => {
  return (
    <div className="container mx-auto w-full mt-8 px-4">
      <footer className="text-gray-600 body-font bg-color-black">
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-white-200 p-4">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/logo1.jpg" alt="" height={100} width={150} />
                <div className={akshar.className}>
                  <div className="ml-3 text-2xl">
                    RASHTRIYA TV
                    <br />
                    <div className="text-sm text-gray-500 ">
                      ©2023 RASHTRIYA TV
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-1 bg-white-200">
            <div className="my-4 bg-white-500 p-5">
              <p className="text-blue-600 text-3xl text-bold ">संपर्क करें</p>
              <a href="#" className="links">
                <svg
                  className="w-1 h-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                ></svg>{" "}
                +91-9911872414{" "}
              </a>
              <a href="#" className="links">
                <svg
                  className="w-1 h-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                ></svg>{" "}
                tanish{" "}
              </a>
              <a href="#" className="links">
                <svg
                  className="w-1 h-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                ></svg>{" "}
                vashisth{" "}
              </a>
              {/* <a href="#" className="links">
                <svg
                  className="w-1 h-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                ></svg>{" "}
                engineer{" "}
              </a> */}
            </div>
          </div>

          <div className="col-span-1 bg-white-200">
            <div className="{akshar.className}">
              <div className="my-4 bg-white-500 p-5">
                <div className="text-blue-600 text-3xl text-bold">
                  समाचार पत्रिका
                </div>
                <div className="text-lg">नवीनतम अपड</div>
                <form
                  action="https://formsubmit.co/vashisthtanish2069@gmail.com"
                  method="POST"
                  id="form"
                  onsubmit="sConsole(event)"
                >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" Email Address"
                  id="data"
                  className="my-1 mx-4 border-2 border-orange-500 rounded-lg"
                />
                <button className="my-1 rounded-xl bg-blue-600 py-1 px-2 text-white">
                  सदस्यता
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
