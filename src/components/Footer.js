import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto w-full mt-8 px-4">
      <footer className="text-gray-600 body-font bg-color-black">
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-white-200 p-4">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/logo1.jpg" alt="" height={100} width={150} />
                <span className="ml-3 text-2xl">
                  RASHTRIYA TV
                  <br />
                  <p className="text-sm text-gray-500">©2023 RASHTRIYA TV</p>
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-1 bg-white-200">
            <div className="bg-white-500 p-5">
              <p className="text-blue-600 text-3xl text-bold ">Contact Info</p>
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
              <a href="#" className="links">
                <svg
                  className="w-1 h-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                ></svg>{" "}
                engineer{" "}
              </a>
            </div>
          </div>

          <div className="col-span-1 bg-white-200">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            {/* <form
              action="https://formsubmit.co/whatadrag016@gmail.com"
              method="POST"
              id="form"
              onsubmit="sConsole(event)"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                id="data"
              />
              <button type="submit" onsubmit="">
                Subscibe
              </button>
            </form> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
