import React from "react";
import logo from "@/public/asset/SURGE CROPS.png";
import Image from "next/image";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="hidden  mb-6 md:mb-0 md:flex ">
              <a href="/" className="flex items-center">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={300}
                  height={100}
                  className=""
                />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span> */}
              </a>
            </div>
            <div className="grid pt-10 grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-sm font-semibold text-black uppercase">
                  Company
                </h2>
                <ul className="text-[#5a5a5a] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/about" className="hover:underline">
                      About
                    </a>
                  </li>

                  <li className="mb-4">
                    <a href="/products" className="hover:underline">
                      Products
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold text-black uppercase">
                  Socials
                </h2>
                <ul className="text-[#5a5a5a] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/surgecrops/profilecard/?igsh=MWRhc3Z1a2ZkbDUweg=="
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://x.com/surgecrops?s=21&t=35OU63AnXcZmm3FJlZGrkA"
                      className="hover:underline "
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://web.facebook.com/profile.php?id=61570314600876&rdid=xpJfxyJoyFhAhh5V&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1AXb12jsEb%2F%3F_rdc%3D1%26_rdr"
                      className="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/surge-crops-trading/"
                      className="hover:underline "
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold text-black uppercase ">
                  Contact
                </h2>
                <ul className="text-[#5a5a5a] dark:text-gray-400 text-nowrap font-medium">
                  <li className="mb-4 text-[14px]">info@surgecrops.com</li>
                  <li>+971 55 181 9398 </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-primary sm:mx-auto dark:border-primary lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-[#5a5a5a] sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a
                href="https://www.thesignatureresidence.com/"
                className="hover:underline"
              >
                Surge Crops Trading
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                target="_blank"
                href="#"
                className="text-[#5a5a5a] hover:text-yellow dark:hover:text-white"
              >
                {/* <FaFacebook /> */}

                <span className="sr-only">Facebook page</span>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/signature.residence.bole/"
                className="text-[#5a5a5a] hover:text-yellow dark:hover:text-white ms-5"
              >
                {/* <FaInstagram /> */}
                <span className="sr-only">Instagram</span>
              </a>
              <a
                target="_blank"
                href="#"
                className="text-[#5a5a5a] hover:text-yellow dark:hover:text-white ms-5"
              >
                {/* <FaTwitter /> */}
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                target="_blank"
                href="#"
                className="text-[#5a5a5a] hover:text-yellow dark:hover:text-white ms-5"
              >
                {/* <FaLinkedin /> */}
                <span className="sr-only">Linkedin account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
