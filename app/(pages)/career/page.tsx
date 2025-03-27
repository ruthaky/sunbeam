"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/public/asset/team.jpg";
import zigzag from "@/public/asset/zigzag.svg";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Fredoka } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

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
    <div className=" flex flex-col">
      <div className="flex relative flex-col lg:flex-row py-[100px] h-auto lg:h-screen w-full lg:pt-[90px] lg:py-0 items-center bg-[#eafdff] justify-between">
        <Image
          src={zigzag}
          alt="logo"
          className="absolute -bottom-[5%] w-full rounded-[20px] h-16"
        />
        <div className="px-4 lg:px-28 flex flex-row items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex lg:hidden items-center justify-end w-full lg:w-[600px] h-full "
            >
              <Image src={heroImage} alt="logo" className="rounded-[20px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${merriweather.variable} font-merriweather text-[35px] lg:text-[60px] font-semibold leading-none `}
            >
              Join Our Team
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[18px] lg:text-[20px] text-[#545454]"
            >
              We are hiring- come be a part of an exciting, safe space work
              environment. We offer supervision for RBT’s, BCABa’s in their
              graduate program.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-end w-full lg:w-[600px] h-full "
          >
            <Image src={heroImage} alt="logo" className="rounded-[20px]" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8 py-[70px] lg:py-24 px-4 lg:px-28">
        <p
          className={`${merriweather.variable} font-merriweather text-[36px] lg:text-[42px] text-[#312f30] font-semibold tracking-tight `}
        >
          Current Openings
        </p>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1
              className={`${merriweather.variable} font-merriweather text-[25px] lg:text-[25px] tracking-tight leading-none `}
            >
              Opening 1
            </h1>
            <p className="text-[18px] lg:text-[20px] text-[#545454]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              href={`/${pathname.split("/")[1]}/contact`}
              onClick={() => handleLinkClick("/contact")}
            >
              <Button>Apply</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1
              className={`${merriweather.variable} font-merriweather text-[25px] lg:text-[25px] tracking-tight leading-none`}
            >
              Opening 2
            </h1>
            <p className="text-[18px] lg:text-[20px] text-[#545454]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              href={`/${pathname.split("/")[1]}/contact`}
              onClick={() => handleLinkClick("/contact")}
            >
              <Button>Apply</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
