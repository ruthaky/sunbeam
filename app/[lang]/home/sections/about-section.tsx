"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/asset/Group 23.svg";
import { Merriweather } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function AboutSection({ aboutTexts }: { aboutTexts: any }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen w-full px-4 lg:px-28 items-center justify-center  pt-[20%] lg:py-0 pb-[15%]">
      <div className="hidden lg:flex items-center justify-start w-1/2 h-full ">
        <Image src={heroImage} alt="logo" className="" />
      </div>
      <div className="flex flex-col gap-5 lg:gap-6 w-full lg:w-1/2">
        <div
          className={` ${merriweather.variable} font-merriweather flex flex-col lg:gap-2 text-[35px] lg:text-[50px] font-semibold tracking-wide leading-none `}
        >
          {aboutTexts.heading}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[8px] mt-2 ml-2 bg-primary lg:hidden"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "250px" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[8px] ml-2 bg-primary hidden lg:block"
          />
        </div>
        <p className="text-[20px] tracking-tight">
          {aboutTexts.subheading}
          <br />
          <br />
          {aboutTexts.subheading2}
        </p>
        <Link
          href={`/${pathname.split("/")[1]}/about`}
          onClick={() => handleLinkClick("/about")}
        >
          <Button>{aboutTexts.button}</Button>
        </Link>
      </div>
    </div>
  );
}
