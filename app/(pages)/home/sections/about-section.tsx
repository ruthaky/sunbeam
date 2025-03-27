"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/asset/snm.jpg";
import { Merriweather } from "next/font/google";
import { Fredoka } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const merriweather = Fredoka({
  weight: ["400", "400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function AboutSection() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen gap-11 w-full px-6 lg:px-28 items-center justify-center  pt-[20%] lg:py-0 pb-[15%]">
      <div className="hidden lg:flex items-center justify-center w-1/2 h-full">
        <Image src={heroImage} alt="logo" className="p-0" />
      </div>
      <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
        <div
          className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[36px] lg:text-[42px] text-[#312f30] font-semibold leading-none `}
        >
          About Us
        </div>
        <p className="text-[20px] tracking-tight text-[#545454]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href="/about">
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
}
