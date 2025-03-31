"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import sun from "@/public/asset/sadsun.svg";
import cat from "@/public/asset/sadcat.svg";
import { Rubik_Bubbles, Fredoka } from "next/font/google";

const rubikBubbles = Rubik_Bubbles({
  weight: "400",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootNotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-4 bg-white">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 z-0"
      >
        <Image
          src={sun}
          alt="Gallery Image"
          width={150}
          height={150}
          className="w-[150px] lg:w-[350px] h-auto object-cover"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 z-0"
      >
        <Image
          src={cat}
          alt="Gallery Image"
          width={150}
          height={150}
          className="w-[150px] lg:w-[250px] h-auto object-cover"
        />
      </motion.div>

      {/* Correct Font Application */}
      <h1
        style={{ fontFamily: rubikBubbles.style.fontFamily }}
        className="text-[150px] font-bold text-[#5ce1e6] mb-0 leading-none"
      >
        404
      </h1>
      <h2
        style={{ fontFamily: fredoka.style.fontFamily }}
        className="text-[50px] font-semibold text-gray-700 mb-4 leading-none"
      >
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#FF9358] text-white rounded-lg hover:bg-[#E07B40] transition-colors"
      >
        Try again later.
      </Link>
    </div>
  );
}
