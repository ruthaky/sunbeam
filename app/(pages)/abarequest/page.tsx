"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/public/asset/abouthero.svg";
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
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen w-full pt-[90px] lg:py-0 px-4 lg:px-28 items-center bg-[#EFFFEA] justify-between">
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
         ABA Service Request
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[20px] tracking-tight "
        >
          We are hiring- come be a part of an exciting, safe space work
          environment. We offer supervision for RBT’s, BCABa’s in their graduate
          program.
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
  );
}

export default page;
