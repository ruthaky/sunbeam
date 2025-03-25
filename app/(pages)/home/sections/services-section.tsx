"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import heroImage from "@/public/asset/one-on-one.jpg";
import Image from "next/image";
import { Fredoka } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function ServicesSection() {
  const [isHoveredgreen, setIsHoveredgreen] = useState(false);
  const [isHoveredorange, setIsHoveredorange] = useState(false);
  const [isHoveredblue, setIsHoveredblue] = useState(false);
  const [isHoveredyellow, setIsHoveredyellow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col gap-5 h-screen justify-center w-full bg-white py-5 py-[8%] lg:py-0 "
    >
      <div className="flex flex-col gap-6 justify-start py-4 px-28">
        <div
          className={` ${merriweather.variable} font-merriweather font-semibold flex flex-col lg:gap-2 text-[35px] lg:text-[42px]  text-[#312f30] leading-none `}
        >
          Our Services
          {/* <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[3px] mt-2 ml-2 bg-primary lg:hidden"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "350px" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-[5px] ml-2 bg-primary hidden lg:block rounded-[20px]"
          /> */}
        </div>
        {/* <p className="text-[20px] tracking-tight">nnsron</p> */}
      </div>
      <div className="w-full h-auto flex flex-col lg:flex-row overflow-x-auto scroll-container gap-4 lg:gap-10 pb-10">
        <div className="flex flex-row  gap-4 lg-flex-row w-auto h-[280px] lg:gap-10 px-28">
          <div className="w-[400px] rounded-[25px] h-full mb-4 lg:mb-0 p-4 flex flex-col gap-2 bg-[#C3F498]  justify-center ">
            <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
              <Link href="/details">
                <motion.div
                  animate={
                    isHoveredgreen ? { opacity: 1, x: 2 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-0 left-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                  onMouseEnter={() => setIsHoveredgreen(true)}
                  onMouseLeave={() => setIsHoveredgreen(false)}
                >
                  {/* Rotating Chevron */}
                  <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                    <ChevronRight width={40} height={40} />
                  </div>

                  {/* Read More Text (Appears on Hover) */}
                  {isHoveredgreen && (
                    <motion.div
                      // initial={{ opacity: 0, x: -10 }}
                      // animate={
                      //   isHovered
                      //     ? { opacity: 1, x: 0 }
                      //     : { opacity: 0, x: -10 }
                      // }
                      // transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10"
                    >
                      Read More
                    </motion.div>
                  )}
                </motion.div>
              </Link>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={heroImage}
                  alt="logo"
                  className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                />
              </motion.div>
            </div>
            <div className="flex flex-row  items-start h-1/3 w-full">
              {" "}
              <p className="font-semibold text-[25px] w-[200px]">
                ABA one-on-one direct therapy
              </p>
            </div>
          </div>

          <div className="w-[400px] rounded-[25px] h-full p-4 flex flex-col gap-2 bg-[#FF9358] justify-center">
            <div className="flex flex-row  items-end justify-end h-1/3 w-full">
              {" "}
              <p className="font-semibold text-[25px] w-[200px] text-right">
                Family/Caregiver Training
              </p>
            </div>
            <div className="relative flex flex-row justify-between  items-end h-2/3 w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={heroImage}
                  alt="logo"
                  className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px]"
                />
              </motion.div>

              <Link href="/details">
                <motion.div
                  animate={
                    isHoveredorange
                      ? { opacity: 1, x: 2 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute bottom-0 right-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                  onMouseEnter={() => setIsHoveredorange(true)}
                  onMouseLeave={() => setIsHoveredorange(false)}
                >
                  {isHoveredorange && (
                    <motion.div className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10">
                      Read More
                    </motion.div>
                  )}
                  <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                    <ChevronRight width={40} height={40} />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

          <div className="w-[400px] rounded-[25px] h-full mb-4 lg:mb-0 p-4 flex flex-col gap-2 bg-[#97EAFD] justify-center">
            <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
              <Link href="/details">
                <motion.div
                  animate={
                    isHoveredblue ? { opacity: 1, x: 2 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-0 left-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                  onMouseEnter={() => setIsHoveredblue(true)}
                  onMouseLeave={() => setIsHoveredblue(false)}
                >
                  {/* Rotating Chevron */}
                  <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                    <ChevronRight width={40} height={40} />
                  </div>

                  {/* Read More Text (Appears on Hover) */}
                  {isHoveredblue && (
                    <motion.div
                      // initial={{ opacity: 0, x: -10 }}
                      // animate={
                      //   isHovered
                      //     ? { opacity: 1, x: 0 }
                      //     : { opacity: 0, x: -10 }
                      // }
                      // transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10"
                    >
                      Read More
                    </motion.div>
                  )}
                </motion.div>
              </Link>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={heroImage}
                  alt="logo"
                  className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px] z-0"
                />
              </motion.div>
            </div>
            <div className="flex flex-row  items-start h-1/3 w-full">
              {" "}
              <p className="font-semibold text-[25px] w-[200px]">
             Occupational Therapy
              </p>
            </div>
          </div>

          <div className="w-[400px] h-full mb-4 lg:mb-0 p-4 rounded-[25px] flex flex-col gap-2 bg-[#FFE24F] justify-center">
            <div className="flex flex-row items-start justify-end h-1/3 w-full">
              {" "}
              <p className="font-semibold text-[25px] w-auto">
               Group Session
              </p>
            </div>
            <div className="relative flex flex-row justify-between items-end h-2/3 w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={heroImage}
                  alt="logo"
                  className="p-0 w-[230px] rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px]"
                />
              </motion.div>

              <Link href="/details">
                <motion.div
                  animate={
                    isHoveredyellow
                      ? { opacity: 1, x: 2 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute bottom-0 right-0 flex items-center justify-start cursor-pointer  gap-0 h-auto w-auto bg-[#f1f1f1a1] transition-transform  ease-in-out z-10 rounded-full"
                  onMouseEnter={() => setIsHoveredyellow(true)}
                  onMouseLeave={() => setIsHoveredyellow(false)}
                >
                  {isHoveredyellow && (
                    <motion.div className="rounded-full text-black text-start px-3 py-1 transition-all ease-in-out duration-300 z-10">
                      Read More
                    </motion.div>
                  )}
                  <div className="h-auto w-auto rounded-full bg-white transition-transform duration-300 hover:-rotate-45 p-1">
                    <ChevronRight width={40} height={40} />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
