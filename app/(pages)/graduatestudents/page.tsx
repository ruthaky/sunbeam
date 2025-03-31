"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/public/asset/abouthero.svg";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Fredoka } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import Requestsection from "../home/sections/requestsection";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

function page() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex flex-col h-auto  w-full  lg:py-0 items-center bg-[#EFFFEA] justify-center pt-[120px] pb-[50px] lg:pt-[90px] lg:pb-0 ">
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen w-full  items-center px-4 lg:px-28 pb-[100px] bg-[#EFFFEA] justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[60px] font-semibold leading-none `}
          >
            Graduate Students
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[20px] tracking-tight "
          >
            We are hiring- come be a part of an exciting, safe space work
            environment. We offer supervision for RBT’s, BCABa’s in their
            graduate program.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href={`/${pathname.split("/")[1]}/contact`}
              onClick={() => handleLinkClick("/contact")}
            >
              <Button>hhh</Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex items-center justify-end w-full lg:w-1/3 h-full"
        >
          <Image src={heroImage} alt="logo" className="" />
        </motion.div>
      </div>

      <div className="flex flex-col gap-10 pb-[100px] px-4 lg:px-28 ">
        {/* <p
          className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[60px] font-semibold tracking-tight `}
        >
          Current Openings
        </p> */}
        <div className="flex flex-col gap-4">
          <h1
            className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[40px] text-[#312f30] font-semibold leading-none `}
          >
            Opening 1
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1
            className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[40px] text-[#312f30] font-semibold leading-none `}
          >
            Opening 2
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1
            className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[40px] text-[#312f30] font-semibold leading-none `}
          >
            Opening 3
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1
            className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[40px] text-[#312f30] font-semibold leading-none `}
          >
            Opening 4
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1
            className={`${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[40px] text-[#312f30] font-semibold leading-none `}
          >
            Opening 5
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Requestsection />
    </div>
  );
}

export default page;
