"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/public/asset/sunbeamlogo.png";
import heroImage from "@/public/asset/bottom.svg";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="bg-[#ff92581b] relative flex flex-col">
      {/* Decorative bottom background */}
      <div
        className="absolute bottom-0 h-[32px] w-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <span className="text-[12px] text-[#ffffffa7] sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Sunbeam ABA Therapy
          </a>
          . All Rights Reserved.
        </span>
      </div>

      {/* Footer Content */}
      <div className="w-full px-6 sm:px-12 lg:px-28 py-8 lg:pb-24">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src={logo.src} alt="logo" width={150} height={75} />
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 w-full md:w-auto text-center md:text-left">
            <div>
              <h2 className="mb-2 text-[18px] font-semibold text-black">
                Links
              </h2>
              <ul className="text-[#5a5a5a] font-medium">
                <li className="mb-2">
                  <Link
                    className="hover:underline"
                    href="/"
                    onClick={() => handleLinkClick("/")}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:underline"
                    href="/about"
                    onClick={() => handleLinkClick("/about")}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:underline"
                    href="/services"
                    onClick={() => handleLinkClick("/services")}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:underline"
                    href="/contact"
                    onClick={() => handleLinkClick("/contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="hidden">
              <h2 className="mb-2 text-[18px] font-semibold text-black">
                Socials
              </h2>
              <ul className="text-[#5a5a5a] font-medium">
                <li className="mb-2">
                  <a
                    target="_blank"
                    href="#"
                    className="hover:underline text-start"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-2">
                  <a target="_blank" href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a target="_blank" href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a target="_blank" href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-2 text-[18px] font-semibold text-black">
                Contact
              </h2>
              <ul className="text-[#5a5a5a] font-medium ">
                <li className="mb-2 text-[14px]">admin@sunbeamcenter.com</li>
                <li className="text-[14px]">971-255-2773</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
