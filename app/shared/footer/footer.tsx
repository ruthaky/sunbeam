"use client";
import React from "react";
import logo from "@/public/asset/sunbeamlogo.png";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/asset/bottom.svg";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div>
      <footer className="bg-[#ff92581b] relative flex">
        <div
          className="absolute bottom-0 h-[32px] w-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          {" "}
          {/* <Image
            src={heroImage}
            alt="Gallery Image"
            className="w-full h-[50px] object-center object-cover z-0"
          /> */}
          <div className="flex items-center justify-center z-10 ">
            <span className="text-[12px] text-[#ffffffa7] sm:text-center">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Surge Crops Trading
              </a>
              . All Rights Reserved.
            </span>
            {/* <div className="flex mt-4 sm:justify-center sm:mt-0"></div> */}
          </div>
        </div>
        <div className="mx-auto w-full px-28 py-6 lg:pb-24">
          <div className="md:flex md:justify-between">
            <div className="hidden  mb-6 md:mb-0 md:flex ">
              <a href="/" className="flex items-center">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={200}
                  height={100}
                  className=""
                />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span> */}
              </a>
            </div>
            <div className="grid pt-10 grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-2 text-[18px] font-semibold text-black">
                  Links
                </h2>
                <ul className="text-[#5a5a5a] font-medium">
                  <li className="mb-4">
                    <Link
                      className="hover:underline"
                      href={`/${pathname.split("/")[1]}/`}
                      onClick={() => handleLinkClick("/")}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="hover:underline"
                      href={`/${pathname.split("/")[1]}/about`}
                      onClick={() => handleLinkClick("/about")}
                    >
                      About
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link
                      className="hover:underline"
                      href={`/${pathname.split("/")[1]}/products`}
                      onClick={() => handleLinkClick("/products")}
                    >
                      Products
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="hover:underline"
                      href={`/${pathname.split("/")[1]}/contact`}
                      onClick={() => handleLinkClick("/contact")}
                    >
                      Contact
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-[18px] font-semibold text-black">
                  Socials
                </h2>
                <ul className="text-[#5a5a5a] font-medium">
                  <li className="mb-4">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/surge-crops-trading/"
                      className="hover:underline "
                    >
                      Linkedin
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
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-[18px] font-semibold text-black">
                  Contact
                </h2>
                <ul className="text-[#5a5a5a] text-nowrap font-medium">
                  <li className="mb-4 text-[14px] text-nowrap">
                    info@surgecrops.com
                  </li>
                  <li className="mb-4 text-[14px] text-nowrap">
                    sales@surgecrops.com
                  </li>
                  <li className="mb-4 text-[14px] text-nowrap">
                    marketing@surgecrops.com
                  </li>
                  <li className="text-nowrap">+971 55 181 9398 </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-[#ff4789] sm:mx-auto lg:my-8 border-t-[2px]" /> */}
        </div>
      </footer>
    </div>
  );
}
