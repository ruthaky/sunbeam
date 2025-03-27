"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroIcon from "@/public/asset/2.svg";
import heroIcon2 from "@/public/asset/heroicon2.svg";
import { Fredoka } from "next/font/google";
const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

function Requestsection() {
  const { scrollYProgress } = useScroll(); // Using `scrollYProgress` instead of `scrollY`
  const rotateHero1 = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotate from 0° to 360°
  const rotateHero2 = useTransform(scrollYProgress, [0, 1], [0, -360]); // Rotate in opposite direction

  return (
    <div className="flex relative w-full h-auto lg:h-[550px] bg-[#fff] justify-center items-center px-6 lg:px-[200px]">
      <div className="relative z-0 w-full h-[290px] bg-[#FF9358] flex flex-col items-center justify-center gap-8 px-[60px] overflow-hidden rounded-[20px]">
        {/* Rotating Hero Icon 1 */}
        <motion.div
          style={{ rotate: rotateHero1 }}
          className="absolute top-[-50px] right-[-50px] lg:top-[-170px] lg:right-[-170px] w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] -z-1"
        >
          <Image
            src={heroIcon}
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Rotating Hero Icon 2 (Opposite Direction) */}
        <motion.div
          style={{ rotate: rotateHero2 }}
          className="absolute bottom-[-50px] left-[-70px] lg:bottom-[-80px] lg:left-[-100px] w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] -z-1"
        >
          <Image
            src={heroIcon2}
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div
          className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[30px] lg:text-[42px] text-white text-center font-semibold leading-none `}
        >
          Get started with Sunbeam ABA Therapy
          {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
        </div>
        <Link href="https://wa.me/971551819398?text=Hello%20I'm%20inquiring%20about%20soy%20beans%20you%20offer">
          <Button>ABA Service Request</Button>
        </Link>
      </div>
    </div>
  );
}

export default Requestsection;
