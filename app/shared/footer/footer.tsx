import React from "react";
import logo from "@/public/images/full logo.svg";
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
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="hidden  mb-6 md:mb-0 md:flex ">
              <a href="#" className="flex items-center">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={120}
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
                <h2 className="mb-6 text-sm font-medium text-yellow uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-[#5a5a5a] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://uspholdings.com/"
                      className="hover:underline"
                    >
                      About
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
                <h2 className="mb-6 text-sm font-medium text-yellow uppercase dark:text-white">
                  Socials
                </h2>
                <ul className="text-[#5a5a5a] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/signature.residence.bole/"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-medium text-yellow uppercase dark:text-white">
                  Contact
                </h2>
                <ul className="text-[#5a5a5a] dark:text-gray-400 font-medium">
                  <li className="mb-4 text-[14px]">
                    info@thesignatureresidence.com
                  </li>
                  <li>+251911234446</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-[#5a5a5a] sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-[#5a5a5a] sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a
                href="https://www.thesignatureresidence.com/"
                className="hover:underline"
              >
                Signature Residence
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
